import type { ImageWithAlt, CTA } from './objects'

export type HomepageProps = {
  header: {
    title: string
    ingress: string
    cta: CTA
    image: ImageWithAlt
  }
}
