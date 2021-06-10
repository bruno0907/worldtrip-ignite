import Link from 'next/link'

import { Link as ChakraLink, Box, Image, Flex, Heading, Text, Avatar } from "@chakra-ui/react"
import { CityProps } from "../../types"

type ContinentProps = {
  continent: string;
  slug: string
}

type CityCardProps = {  
  city: CityProps,
  continent: ContinentProps;
}

const CityCard = ({ city, continent }: CityCardProps) => {
  const href = (`${continent.slug}/${city.slug}`).toLowerCase()

  return(
    <Link href={href} passHref>
      <ChakraLink w="inherit" h="inherit" _hover={{ textDecoration: "none", filter: 'brightness(1.1)' }}>
        <Box as="li" w="245px" h="275px" borderRadius="4px" overflow="hidden">
          <Image
            src={city.banner}
            alt={city.city}
            height="170px"
            fit="cover"
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
              <Heading mb="3" fontSize="1.25rem">{city.city}</Heading>
              <Text fontSize="0.9rem">{continent.continent}</Text>
            </Box>
            <Avatar
              size="sm"
              src={city.flag}
              name={city.city}            
            />
          </Flex>
        </Box>
      </ChakraLink>
    </Link>
  )
}

export { CityCard }