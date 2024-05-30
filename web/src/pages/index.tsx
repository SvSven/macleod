import { client } from '@/utils/sanity/client'
import { homePageQuery } from '@/lib/queries/homepage'

export default function HomePage({ data }) {
  const pageData = data.pageData

  return <h1>{pageData.title}</h1>
}

export async function getStaticProps() {
  const pageData = await client.fetch(homePageQuery)

  return {
    props: {
      data: {
        pageData,
      },
    },
  }
}
