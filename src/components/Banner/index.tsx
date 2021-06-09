import { Flex, Box, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react'

const Banner = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Flex w="100%" p={["6", "8"]} align="center" justify="center" h={["170px", "335px"]} bgImage="/header_banner.jpg" bgSize="cover">
      <Flex w="1440px" align="center" justify="space-between">
        <Box w={isWideScreen ? "575px" : "100%"}>
          <Heading mb="2" fontSize={["1.25rem", "2.25rem"]} color="gray.100" fontWeight="500">5 continentes, <br/>infinitas possibilidades.</Heading>
          <Text fontSize={["0.9rem", "1.25rem"]} color="gray.200">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Box>
        { isWideScreen && (
          <Box w="45%">            
            <Image h="350px" ml="auto" src="/airplane.svg" alt="Airplane" transform="auto" translateY="30px"/>            
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export { Banner }