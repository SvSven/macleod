import { client } from '@/utils/sanity/client'
import { getQueryFromSlug } from '@/lib/getQueryFromSlug'
import dynamic from 'next/dynamic'
import type { GetStaticPropsContext } from 'next'
import { HomepageProps } from '@/types'

const HomePage = dynamic(() => import('../templates/homepage'))

type PageProps = {
  data: {
    pageData: HomepageProps
  }
}

export default function Page({ data }: PageProps) {
  const { pageData } = data

  return <HomePage {...pageData} />
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { query, queryParams } = getQueryFromSlug(params?.slug as string[])
  const pageData = await client.fetch(query, queryParams)

  if (!pageData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: { pageData },
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
