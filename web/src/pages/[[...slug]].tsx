import { client } from '@/utils/sanity/client'
import { getQueryFromSlug } from '@/lib/getQueryFromSlug'

export default function HomePage({ data }) {
  const pageData = data.pageData

  return <h1>{pageData.title}</h1>
}

export const getStaticProps = async ({ params }) => {
  const { query, queryParams } = getQueryFromSlug(params?.slug)
  const pageData = await client.fetch(query, queryParams)

  if (!pageData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: {
        pageData,
      },
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
