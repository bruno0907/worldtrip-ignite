import { SwiperSlide} from "swiper/react"
import { SlideItem } from './slideItem'
import { SlideWrapper } from './slideWrapper'

interface SlideProps{  
  content: SlideContentProps[];
}

interface SlideContentProps{
  bgImage: string;
  heading?: string;
  text?:string;
  slug?:string;
}

const Slide = ({ content }: SlideProps): JSX.Element => { 
  return (
    <SlideWrapper>
      {content.map((contentItem: SlideContentProps) => 
        <SwiperSlide key={contentItem.heading}>
          <SlideItem 
            heading={contentItem.heading}
            text={contentItem.text}
            bgImage={contentItem.bgImage}
            href={`continente/${contentItem.slug}`}
          />
        </SwiperSlide>        
      )}
    </SlideWrapper>
  )
}

export { Slide }
