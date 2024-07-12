import type { HomepageProps } from '@/types'
import { HeaderHome } from '@/components/HeaderHome'

const HomePage = ({ header }: HomepageProps) => {
  return (
    <>
      <HeaderHome {...header} />
      <h1 className="pt-10">Hello world</h1>
    </>
  )
}

export default HomePage
