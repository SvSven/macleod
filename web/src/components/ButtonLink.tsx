import { ReactNode } from 'react'

/**
 * TODO: Add URL handling once decided on format in Sanity
 */

type Props = {
  url: string
  children: ReactNode
}

const ButtonLink = ({ url, children }: Props) => (
  <a
    href={url}
    className="bg-mcl-red-900 text-white px-5 py-2.5 font-medium rounded-lg inline-block hover:bg-mcl-red-50 transition duration-50"
  >
    {children}
  </a>
)

export default ButtonLink
