import { Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../../components/Header";

export default function CityPage() {    
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
          <Heading mt={["0", "auto"]} mb={["0", "8"]} color="gray.50">Londres</Heading>
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
      </Flex>
    </Flex>
  )
}