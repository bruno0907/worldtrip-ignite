import Head from 'next/head'
import { Flex, Box, Text, Heading, SimpleGrid, Tooltip } from "@chakra-ui/react";
import { Header } from "../../../components/Header";
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { CityCard } from "../../../components/CityCard";
import { CityProps, ContinentProps } from '../../../types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../../services/api';

interface ContinentPageProps {
  continent: ContinentProps;
  cities: CityProps[];
}

export default function ContinentPage({ continent, cities }: ContinentPageProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>World Trip | Europa</title>
      </Head>
      <Header />
      <Flex
        w="100%"
        h={["150px",
        "500px"]}
        p="8"
        mb="6"
        bgImage={continent.banner}
        bgSize="cover"
        bgPosition="center"
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
          <Heading mt={["0", "auto"]} mb={["0", "8"]} color="gray.50">{continent.continent}</Heading>
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
        <Flex w="100%" mr={["0", "10"]}>
          <Text textAlign="justify" mb="4" fontSize={["0.9rem", "1.5rem"]}>
            {continent.description}
          </Text>
        </Flex>
        <Flex w="100%" ml={["0", "10"]} justify="space-evenly">
          <Box align="center" justify="center" p="2">
            <Heading color="yellow.400" fontSize={["1.5rem", "3rem"]}>{continent.countries}</Heading>
            <Text fontWeight="700" fontSize={["1.125rem", "1.5rem"]}>países</Text>
          </Box>
          <Box align="center" justify="center" p="2">
            <Heading color="yellow.400" fontSize={["1.5rem", "3rem"]}>{continent.languagues}</Heading>
            <Text fontWeight="700" fontSize={["1.125rem", "1.5rem"]}>línguas</Text>
          </Box>
          <Box align="center" justify="center" p="2">
            <Heading color="yellow.400" fontSize={["1.5rem", "3rem"]}>{continent.top100cities}</Heading>
            <Text fontWeight="700" fontSize={["1.125rem", "1.5rem"]}>
              cidades +100
              <Tooltip label="Número de cidades no top 100 de mais visitadas do mundo!" aria-label="Top100 mais visitadas no mundo">
                <InfoOutlineIcon boxSize="4" ml="2" mb="2px" color="gray.400" />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex m="0 auto" w="100%" maxWidth="1440px" p={["4", "8"]} direction="column">
        <Heading mb="10">Cidades +100</Heading>
        <SimpleGrid as="ul"spacing="10" minChildWidth="256px">
          { cities.map((city: CityProps) => (
            <CityCard key={city.id} city={city} continent={continent.slug}/>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<ContinentProps[]>('/continents')
  const { data } = response

  const paths = data.map((continent: ContinentProps) => {
    return {
      params: {
        continente: continent.slug
      }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continente = params?.continente
  
  const continents = await api.get(`/continents?slug=${continente}`)
  const continent = continents.data[0]
  
  const citiesData = await api.get(`/cities?continent=${continent.id}`)
  const cities = citiesData.data  

  return {
    props: {
      continent,
      cities
    }
  }
}