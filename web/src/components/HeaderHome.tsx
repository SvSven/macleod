import { SanityImage } from '@/components/SanityImage'
import HotspotToObjPos from '@/utils/HotspotToObjPos'
import type { CTA, ImageWithAlt } from '@/types'
import ButtonLink from './ButtonLink'
import { Arrow } from './Arrow'

type Props = {
  ingress: string
  title: string
  image: ImageWithAlt
  cta: CTA
}

const actions = [
  {
    title: 'Het Schotse uurtje',
    text: 'Het Schotse uurtje is een uur lang entertainment met Schotse muziek',
    link: 'fubar',
  },
  {
    title: 'De MacLeod Boys',
    text: 'Wie zijn de MacLeod Boys? Waar komen ze vandaan? En hebben ze weleens Haggis gegeten?',
    link: 'fubar',
  },
  {
    title: "Foto's & video's",
    text: 'Benieuwd naar een impressie van de MacLeod Boys? Bekijk dan onze foto’s en video’s',
    link: 'fubar',
  },
]

export const HeaderHome = ({ ingress, title, image, cta }: Props) => {
  return (
    <section className="relative grid min-h-[50lvh] grid-cols-1 text-white md:grid-cols-2">
      <div className="bg-mcl-blue-900 order-2 grid w-full md:order-1 md:pb-20">
        <div className="flex max-w-[640px] flex-col justify-center justify-self-end px-8 py-12 md:py-16">
          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mb-8 leading-loose tracking-wide">{ingress}</p>

          {cta && (
            <div>
              <ButtonLink url="">{cta.label}</ButtonLink>
            </div>
          )}
        </div>
      </div>
      <div className="relative order-1 min-h-[30vh] md:order-2 md:pb-20">
        <SanityImage
          src={image}
          alt={image.alt || ''}
          layout="fill"
          className="object-cover"
          style={{ objectPosition: HotspotToObjPos(image.hotspot) }}
        />
      </div>
      <div className="z-10 order-3 md:col-span-2 md:-mt-20">
        <div className="text-mcl-blue-900 flex max-w-screen-xl flex-col divide-y-2 divide-slate-100 rounded-lg border-gray-200 bg-white shadow-lg md:mx-auto md:flex-row md:divide-x-2 md:divide-y-0">
          {actions.map(({ title, text, link }) => (
            <a
              href={link}
              className="duration-50 flex grow basis-0 flex-col p-6 text-center transition first:rounded-l-lg last:rounded-r-lg hover:bg-slate-50"
            >
              <h2 className="text-1xl mb-3 font-bold md:text-2xl">{title}</h2>
              <p className="mb-3">{text}</p>
              <div className="ml-auto mt-auto">
                <Arrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
