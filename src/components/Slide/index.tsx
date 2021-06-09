import { SwiperSlide} from "swiper/react"
import { ContinentProps } from "../../types"
import { SlideItem } from './slideItem'

import { SlideWrapper } from './slideWrapper'

interface ContinentsProps{
  continents: ContinentProps[];
}

const Slide = ({ continents }: ContinentsProps) => {
  return (
    <SlideWrapper>
      {continents.map((continent: ContinentProps) => 
        <SwiperSlide key={continent.slug}>
          <SlideItem 
            heading={continent.continent}
            text={continent.cta}
            bgImage={continent.banner}
            href={`continente/${continent.slug}`}
          />
        </SwiperSlide>        
      )}
    </SlideWrapper>
  )
}

export { Slide }
