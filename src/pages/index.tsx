import Head from 'next/head'
import { Flex, Image, Heading, Text, Box, useBreakpointValue, Divider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { OptionsSection } from '../components/OptionsSection'
import { Slide } from '../components/Slide'

export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction="column" align="center">
      <Head>
        <title>World Trip | Home</title>
      </Head>

      <Header />

      <Banner />

      <OptionsSection />

      <Divider w="90px" mb="16" border="2px" borderColor="gray.700"/>

      <Heading textAlign="center" fontWeight="500" fontSize={["1.25rem", "1.65rem",  "2.25rem"]} mb="10">Vamos nessa?<br/>Então escolha seu continente</Heading>      

      <Slide />      
      
    </Flex>    
  )
}
