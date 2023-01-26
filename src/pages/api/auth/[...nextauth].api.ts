import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '../../../lib/auth/prisma-adapter'
import { prisma } from '../../../lib/prisma'
import { parseCookies, setCookie } from 'nookies'

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            avatar_url: profile.picture,
          }
        },
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
      }),
    ],
    pages: {
      error: '/auth/error',
    },
    callbacks: {
      async signIn({ profile, account, user, email }) {
        if (account?.provider === 'email') {
          setCookie({ res }, '@coronado_pet:userId', user.id, {
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
          })
          const existEmailInDb = await prisma.user.findUnique({
            where: {
              email: account?.providerAccountId,
            },
          })

          if (existEmailInDb) {
            return true
          }
          if (!existEmailInDb) {
            return '/api/auth/error?error=EmailNotFound'
          }
        }

        if (account?.provider === 'google') {
          const { '@coronado_pet:userId': userIdInCookies } = parseCookies({
            req,
          })
          const existAccountInDb = await prisma.account.findUnique({
            where: {
              provider_provider_account_id: {
                provider_account_id: profile!.sub!,
                provider: 'google',
              },
            },
          })
          if (existAccountInDb || !!userIdInCookies) {
            return true
          }
          if (!existAccountInDb) {
            return '/api/auth/error?error=Unlinked'
          }
        }
        return false
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
