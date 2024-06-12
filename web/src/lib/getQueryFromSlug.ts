import { homePageQuery, pageQuery } from './queries'

/**
 * We only have 2 different document types for now; page and homepage
 */
export const getQueryFromSlug = (slugArray: string[] = ['']) => {
  const slug = `/${slugArray.join('/')}`

  if (slug) {
    return {
      query: pageQuery,
      queryParams: {
        slug: slug,
      },
    }
  }

  return {
    query: homePageQuery,
    queryParams: {},
  }
}
