import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react"
import { Swiper } from "swiper/react"

import SwiperCore, { Navigation, Pagination } from "swiper/core";

type SlideProps = {  
  children: ReactNode;
}

SwiperCore.use([Navigation, Pagination]);

const Slide = ({ children }: SlideProps) => { 
  return (
    <Flex 
      w="100%"
      maxW="1440px"
      h={["250px", "450px"]}
      position="relative"   
      mb="16" 
    >
      <Swiper navigation pagination className="mySwiper">        
        {children}        
      </Swiper>
    </Flex>
  )
}

export { Slide }
