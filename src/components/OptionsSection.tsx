import { SimpleGrid, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

const OptionsSection = () => {
  const isWideScreen = useBreakpointValue({
    sm: false,
    lg: true
  })
  return (
    <SimpleGrid w="100%" maxW="1440px" py="20" gap="4" minChildWidth={["150px", "210px"]}>
      <Flex p={["2", "4"]} direction={isWideScreen ? "column" : "row"} align="center" justify="center">
        {isWideScreen 
          ? <Image mb="6" src="/cocktail.svg" alt="vida noturna"/> 
          : <Image mr="2"src="/dot.svg" alt="vida noturna"/>}
        <Text fontSize={["1.15rem", "1.5rem"]} fontWeight="500">vida noturna</Text>
      </Flex>
      <Flex p={["2", "4"]} direction={isWideScreen ? "column" : "row"} align="center" justify="center">
        {isWideScreen 
          ? <Image mb="6" src="/surf.svg" alt="praia"/>
          : <Image mr="2"src="/dot.svg" alt="praia"/>}
        <Text fontSize={["1.15rem", "1.5rem"]} fontWeight="500">praia</Text>
      </Flex>
      <Flex p={["2", "4"]} direction={isWideScreen ? "column" : "row"} align="center" justify="center">
        { isWideScreen 
          ? <Image mb="6" src="/building.svg" alt="moderno"/>
          : <Image mr="2"src="/dot.svg" alt="moderno"/>}
        <Text fontSize={["1.15rem", "1.5rem"]} fontWeight="500">moderno</Text>
      </Flex>
      <Flex p={["2", "4"]} direction={isWideScreen ? "column" : "row"} align="center" justify="center">
        {isWideScreen
          ? <Image mb="6" src="/museum.svg" alt="clássico"/>
          : <Image mr="2"src="/dot.svg" alt="clássico"/>}
        <Text fontSize={["1.15rem", "1.5rem"]} fontWeight="500">clássico</Text>
      </Flex>
      <Flex p={["2", "4"]} direction={isWideScreen ? "column" : "row"} align="center" justify="center">
        {isWideScreen
          ? <Image mb="6" src="/earth.svg" alt="e mais..."/>
          : <Image mr="2"src="/dot.svg" alt="e mais"/>}
        <Text fontSize={["1.15rem", "1.5rem"]} fontWeight="500">e mais...</Text>
      </Flex>
    </SimpleGrid>
  )
}

export { OptionsSection }