import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react'
import { Swiper } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);
interface SlideWrapperProps {
  children: ReactNode;
}

const SlideWrapper = ({ children }: SlideWrapperProps) => {

  return (
    <Flex 
      w="100%"
      maxW="1440px"
      h="450px"
      position="relative"   
      mb="16" 
    >
      <Swiper navigation pagination className="mySwiper">
        {children}
      </Swiper>
    </Flex>
  )
}

export { SlideWrapper }