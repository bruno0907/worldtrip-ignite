import { Flex, Link, Image, Box, Text, Heading, SimpleGrid, Avatar, Tooltip } from "@chakra-ui/react";
import { Header } from "../../../components/Header";
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router";

const cities = ['1', '2', '3', '4', '5']

export default function ContinentPage() {  
  const { asPath: path } = useRouter()
  return (
    <Flex direction="column">
      <Header />
      <Flex
        w="100%"
        h={["150px",
        "500px"]}
        p="8"
        mb="6"
        bgImage="url('/slider_banner_europe.jpg')"
        bgSize="cover"
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
          <Heading mt={["0", "auto"]} mb={["0", "8"]} color="gray.50">Europa</Heading>
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
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa 
            geralmente divide-se da Ásia a leste pela divisória de águas 
            dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar 
            Negro a sudeste...
          </Text>
        </Flex>
        <Flex w="100%" ml={["0", "10"]} justify="space-evenly">
          <Box align="center" justify="center" p="2">
            <Heading color="yellow.400" fontSize={["1.5rem", "3rem"]}>50</Heading>
            <Text fontWeight="700" fontSize={["1.125rem", "1.5rem"]}>países</Text>
          </Box>
          <Box align="center" justify="center" p="2">
            <Heading color="yellow.400" fontSize={["1.5rem", "3rem"]}>60</Heading>
            <Text fontWeight="700" fontSize={["1.125rem", "1.5rem"]}>línguas</Text>
          </Box>
          <Box align="center" justify="center" p="2">
            <Heading color="yellow.400" fontSize={["1.5rem", "3rem"]}>27</Heading>
            <Text fontWeight="700" fontSize={["1.125rem", "1.5rem"]}>
              cidades +100
              <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
                <InfoOutlineIcon boxSize="4" ml="2" mb="2px" color="gray.400" />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex m="0 auto" w="100%" maxWidth="1440px" p={["4", "8"]} direction="column">
        <Heading mb="10">Cidades +100</Heading>
        <SimpleGrid as="ul"spacing="10" minChildWidth="256px">
          { cities.map((item, index) => (
            <Link key={index} href={`${path}/london`} _hover={{ textDecoration: "none" }}>
              <Box as="li" w="256px" h="279px" borderRadius="4px" overflow="hidden ">
                <Image
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be"
                  alt="Reino Unido"
                  objectFit="cover"
                  z-index="100" 
                />
                <Flex
                  direction="row"
                  p="4"
                  border="1px"
                  borderColor="yellow.300"
                  borderBottomLeftRadius="4px"
                  borderBottomRightRadius="4px"
                  align="center"
                  justify="space-between"

                >
                  <Box>
                    <Heading mb="3" fontSize="1.25rem">Londres</Heading>
                    <Text fontSize="0.9rem">Reino Unido</Text>
                  </Box>
                  <Avatar
                    size="sm"
                    src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                    alt="Bandeira Reino Unido" 
                  />
                </Flex>
              </Box>
            </Link>

          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}