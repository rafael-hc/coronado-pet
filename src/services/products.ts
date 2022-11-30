// import { Products } from '@prisma/client'
import { primeiraLetraMaiuscula } from '../utils/formats'
import { prisma } from '../utils/prisma'
import { categoryList } from '../utils/productList'

export const getAllProducts = async () => {
  const products = await prisma.products.findMany({
    include: {
      categories: true,
    },
  })
  return products
}

export const getProductsByCategory = async (category: string) => {
  const products = await prisma.products.findMany({
    where: {
      categories: {
        some: {
          OR: [
            {
              name: {
                contains: primeiraLetraMaiuscula(category),
              },
            },
            {
              name: {
                contains: category,
              },
            },
          ],
        },
      },
    },
    // where: {
    // OR: [
    //   {
    //     name: {
    //       contains: primeiraLetraMaiuscula(category),
    //     },
    //   },
    //   {
    //     name: {
    //       contains: category,
    //     },
    //   },
    // ],
    // },
    // include: {
    //   products: true,
    // },
  })
  // const onlyProducts = categories.reduce((acc, atual) => {
  //   acc = [...atual.products]
  //   return acc
  // }, [] as Products[])

  return products
}

export const getProduct = async (slug: string) => {
  const product = await prisma.products.findUnique({
    where: {
      slug,
    },
    include: {
      categories: true,
    },
  })
  return product
}

export const getBestSellerProducts = async () => {
  const bestSellet = await prisma.products.findMany()
  return bestSellet
}

export const getLatestProducts = async () => {
  const bestSellet = await prisma.products.findMany({
    take: 6,
    orderBy: {
      registeredAt: 'desc',
    },
  })
  return bestSellet
}

export const addProduto = async () => {
  const response = await prisma.products.create({
    data: {
      id: '10031181000385',
      name: 'Tapete Higiênico Petz Carvão Ativado para Cães',
      description:
        'Indicado para cães; - Feito de carvão de bambu; - Super absorção; - Tecido estrutural; - Possui atrativo canino; - Carvão ativado que neutraliza odores; - Possui forro de plástico a prova de vazamento; - A parte de baixo é branca para que você possa identificar com facilidade qualquer modificação de cor na urina; - Disponível em embalagens com 5 e 30 unidades.',
      price: 2599,
      costPrice: 1899,
      size: '5 unidades',
      inventory: 50,
      imageUrl: '/images/1644440383808.webp',
      slug: 'tapete-higienico-petz-carvao-ativado-para-caes',
      categories: {
        connect: [
          { id: '2096f3b2-7680-402e-aaef-f3d88bed007b' },
          { id: '464d8319-6f77-4a24-b2c9-89895a7d3431' },
          { id: '3bf0beb8-dba4-49e7-964d-48e276299a3e' },
          { id: 'b763137b-2dce-48cd-a346-b317c7f55693' },
          { id: '24da40e8-2507-41fa-8120-0b10d8b637cd' },
          { id: 'c397d643-f6e5-44eb-9f2c-d98243116c82' },
          { id: '8abf7a1c-b175-427a-8cba-d2cd56703096' },
          { id: '380b56e9-a0ec-4e79-8fa9-8dcadf13244c' },
          { id: 'ea337a5e-d351-4238-a07f-dd63c2bec0e6' },
        ],
      },
    },
    include: {
      categories: true,
    },
  })
  return response
}
export const addCategorias = async () => {
  const response = await prisma.categories.createMany({
    data: categoryList,
  })
  return response
}
