import { NextApiRequest, NextApiResponse } from 'next'
import { Adapter } from 'next-auth/adapters'
import { destroyCookie, parseCookies } from 'nookies'
import { prisma } from '../prisma'

export function PrismaAdapter(
  req: NextApiRequest,
  res: NextApiResponse,
): Adapter {
  return {
    async createUser(user) {
      const { '@coronado_pet:userId': userIdInCookies } = parseCookies({ req })
      if (!userIdInCookies) {
        // throw new Error('User id not found')
      }

      const prismaUser = await prisma.user.update({
        where: {
          id: userIdInCookies,
        },
        data: {
          avatar_url: user.avatar_url,
        },
      })

      destroyCookie({ res }, '@coronado_pet:userId', {
        path: '/',
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        cpf: prismaUser.cpf,
        avatar_url: prismaUser.avatar_url!,
        date_of_birth: prismaUser.date_of_birth,
        phone: prismaUser.phone,
        emailVerified: null,
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        phone: user.phone,
        avatar_url: user.avatar_url!,
        date_of_birth: user.date_of_birth,
        emailVerified: null,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        phone: user.phone,
        avatar_url: user.avatar_url!,
        date_of_birth: user.date_of_birth,
        emailVerified: null,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        phone: user.phone,
        avatar_url: user.avatar_url!,
        date_of_birth: user.date_of_birth,
        emailVerified: null,
      }
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          avatar_url: user.avatar_url,
        },
      })
      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        cpf: prismaUser.cpf,
        phone: prismaUser.phone,
        avatar_url: prismaUser.avatar_url!,
        date_of_birth: prismaUser.date_of_birth,
        emailVerified: null,
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          expires,
          user_id: userId,
          session_token: sessionToken,
        },
      })
      return {
        sessionToken,
        userId,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })
      if (!prismaSession) {
        return null
      }
      const { user, ...session } = prismaSession

      return {
        session: {
          expires: session.expires,
          sessionToken: session.session_token,
          userId: session.user_id,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          cpf: user.cpf,
          phone: user.phone,
          avatar_url: user.avatar_url!,
          date_of_birth: user.date_of_birth,
          emailVerified: null,
        },
      }
    },

    async updateSession({ sessionToken, expires, userId }) {
      const prismaSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      })
      return {
        expires: prismaSession.expires,
        sessionToken: prismaSession.session_token,
        userId: prismaSession.user_id,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
      destroyCookie({ res }, '@coronado_pet:userId', {
        path: '/',
      })
    },

    async createVerificationToken({ identifier, expires, token }) {
      const verificationToken = await prisma.verificationToken.create({
        data: {
          expires,
          identifier,
          token,
        },
      })

      return {
        identifier: verificationToken.identifier,
        expires: verificationToken.expires,
        token: verificationToken.token,
      }
    },

    async useVerificationToken({ identifier, token }) {
      const verificationToken = await prisma.verificationToken.findUnique({
        where: {
          identifier_token: {
            identifier,
            token,
          },
        },
      })

      if (!verificationToken) {
        return null
      }

      return verificationToken
    },
  }
}
