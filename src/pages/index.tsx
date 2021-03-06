import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Flex, Heading, Divider } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { OptionsSection } from '../components/OptionsSection'
import { Slide } from '../components/Slide'
import { SlideItem } from '../components/Slide/slideItem'
import { api } from '../services/api'

import { ContinentProps } from '../types'
import { SwiperSlide } from 'swiper/react'

interface HomeProps{
  continent: {
    heading: string;
    text: string;
    bgImage: string;
    slug: string;
  }[];
}

export default function Home({ continent }: HomeProps) {    
  return (
    <Flex direction="column" align="center">
      <Head>
        <title>World Trip | Home</title>
      </Head>
      
      <Header />
      
      <Banner />
      
      <OptionsSection />
      
      <Divider w="90px" mb="16" borderBottomWidth="3px" borderColor="gray.700"/>
      
      <Heading textAlign="center" fontWeight="500" fontSize={["1.25rem", "1.65rem",  "2.25rem"]} mb="10">Vamos nessa?<br/>Então escolha seu continente</Heading>      
      
      <Slide>
        {continent.map(item =>
          <SwiperSlide key={item.bgImage}>
            <Link href={item.slug} passHref>
              <a>
                <SlideItem 
                  heading={item.heading}
                  text={item.text}
                  bgImage={item.bgImage}
                />
              </a>
            </Link> 
          </SwiperSlide>
        )} 
      </Slide>      
      
    </Flex>    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<ContinentProps[]>('/continents')
  const { data } = response 

  const continent = data.map(item => { 
    return {
      heading: item.continent,
      text: item.cta,
      bgImage: item.banner,   
      slug: item.slug
    }
  })
  
  return {
    props: {
      continent
    }
  }
}