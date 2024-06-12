import type { ImageWithAlt, CTA } from './objects'

export type HomepageProps = {
  data: {
    header: {
      title: string
      ingress: string
      cta: CTA
      image: ImageWithAlt
    }
  }
}
