import type { SanityImageHotspot } from '@sanity/image-url/lib/types/types'

const HotspotToObjPos = (hotspot: SanityImageHotspot | undefined): string => {
  if (!hotspot || !hotspot?.x) return 'center center'

  return `${hotspot?.x.toFixed(1)}% ${hotspot?.y.toFixed(1)}%`
}

export default HotspotToObjPos
