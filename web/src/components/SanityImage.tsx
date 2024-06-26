import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image, { ImageProps } from 'next/image'

import { client } from '@/utils/sanity/client'
import { useNextSanityImage } from 'next-sanity-image'

type SanityImageProps = Omit<ImageProps, 'src'> & {
  src: SanityImageSource
  layout?: 'responsive' | 'fill'
}

export const SanityImage = ({ src, alt, layout = 'responsive', ...rest }: SanityImageProps) => {
  const imageProps = useNextSanityImage(client, src)

  if (layout === 'fill') {
    return <Image src={imageProps.src} alt={alt} loader={imageProps.loader} layout="fill" {...rest} />
  }

  return <Image {...imageProps} alt={alt} layout={layout} sizes="(max-width: 800px) 100vw, 800px" {...rest} />
}
