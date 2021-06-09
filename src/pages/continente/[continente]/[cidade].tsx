import Head from 'next/head';
import { Flex, Heading, Text, Skeleton, SkeletonText } from "@chakra-ui/react";
import { Header } from "../../../components/Header";
import { GetStaticPaths, GetStaticProps } from 'next';
import { CityProps } from '../../../types';
import { ParsedUrlQuery } from 'querystring'
import { api } from '../../../services/api';
import { useRouter } from 'next/dist/client/router';
import { Slide } from '../../../components/Slide';

interface CityPageProps{
  city: CityProps;
}

interface CityPageParams extends ParsedUrlQuery {
  cidade: string;
  continente: string;
}

export default function CityPage({ city }: CityPageProps) {  
  const router = useRouter()

  if(router.isFallback){
    return (
      <Flex direction="column">
        <Header />      
        <Skeleton w="100%" h={["150px", "500px"]} mb="16"/> 
        <Flex m="0 auto" w="100%" maxW="1440px" direction="column">
          <Skeleton w="150px" h="36px" mb="16"/>
          <SkeletonText m="0 auto" w="100%" noOfLines={10} mb="8"/>
          <Skeleton w="100%" h="250px" m="0 auto" mb="16"/>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex direction="column">
      <Head>
        <title>World Trip | {city.city}</title>
      </Head>
      <Header />      
      <Flex
        w="100%"
        h={["150px",
        "500px"]}
        p="8"
        mb="6"
        bgImage={`url('${city.banner}')`}
        bgSize="cover"
        bgPos="center"
      > 
        <Flex
          m="auto"
          p={["4",
          "8"]}
          w="100%"
          h="100%"
          maxW="1440px"
          align={["center",
          "flex-end"]}
          justify={["center",
          "flex-start"]}
        >
          <Heading mt={["0", "auto"]} mb={["0", "8"]} color="gray.50">{city.city}</Heading>
        </Flex>
      </Flex>
      <Flex
        m="0 auto"
        w="100%"
        maxW="1440px"
        p={["4",
        "8"]}
        mb="8"
        align="center"
        justify="space-between"
        direction={["column",
        "column",
        "column",
        "row"]}
      >
        <Text>{city.description}</Text>        
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {  
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<CityPageProps, CityPageParams> = async ({ params }) => {
  const { cidade } = params!
  
  const response = await api.get(`/cities?slug=${cidade}`)
  const city = response.data[0]  

  return {
    props: {
      city
    }
  }
}