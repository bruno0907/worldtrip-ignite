import Head from 'next/head'
import { Flex, Heading, Divider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { OptionsSection } from '../components/OptionsSection'
import { Slide } from '../components/Slide'
import { GetStaticProps } from 'next'
import { ContinentProps } from '../types'
import { api } from '../services/api'

interface ContinentsProps{
  continents: ContinentProps[];
}

export default function Home({ continents }: ContinentsProps) {  
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
      <Slide continents={continents}/>            
    </Flex>    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents')
  const continents = response.data

  return {
    props: {
      continents
    }
  }
}