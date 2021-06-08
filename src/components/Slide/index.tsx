import { SwiperSlide} from "swiper/react"
import { SlideItem } from './slideItem'

import { SlideWrapper } from './slideWrapper'

const Slide = () => {
  return (
    <SlideWrapper>
      <SwiperSlide>
        <SlideItem 
          heading="Europa"
          text="O continente mais antigo."
          bgImage="/slider_banner_europe.jpg"
          href="/continent/europe"
        />
      </SwiperSlide>        
      <SwiperSlide>
        <SlideItem 
          heading="Ásia"
          text="O continente mais antigo."
          bgImage="/slider_banner_europe.jpg"
          href="/continent"
        />          
      </SwiperSlide>
    </SlideWrapper>
  )
}

export { Slide }