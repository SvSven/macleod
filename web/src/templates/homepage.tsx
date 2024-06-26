import type { HomepageProps } from '@/types'
import { HeaderHome } from '@/components/HeaderHome'

const HomePage = ({ header }: HomepageProps) => {
  return <HeaderHome {...header} />
}

export default HomePage
