import { SanityImage } from '@/components/SanityImage'
import HotspotToObjPos from '@/utils/HotspotToObjPos'
import type { CTA, ImageWithAlt } from '@/types'

type Props = {
  ingress: string
  title: string
  image: ImageWithAlt
  cta: CTA
}

export const HeaderHome = ({ ingress, title, image }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 text-white bg-mcl-blue-900 min-h-[50vh]">
      <div className="max-w-[720px] py-16 px-8 justify-self-end flex flex-col justify-center order-2 md:order-1">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p>{ingress}</p>
      </div>
      <div className="relative min-h-[30vh] order-1 md:order-2">
        <SanityImage
          src={image}
          alt={image.alt || ''}
          layout="fill"
          className="object-cover"
          style={{ objectPosition: HotspotToObjPos(image.hotspot) }}
        />
      </div>
    </section>
  )
}
