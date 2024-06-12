import { SanityImageObject, SanityImageCrop, SanityImageHotspot } from '@sanity/image-url/lib/types/types'

export type ImageWithAlt = {
  alt?: string
  asset: SanityImageObject
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
  _type: 'imageWithAlt'
  extension?: string
}

export type CTA = {
  label: string
  link: {
    _type: 'reference'
    _ref: string
  }
}
