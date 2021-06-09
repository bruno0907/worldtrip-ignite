import { Link, Box, Image, Flex, Heading, Text, Avatar } from "@chakra-ui/react"
import { CityProps } from "../../types"

type CityCardProps = {  
  city: CityProps,
  continent: string;
}

const CityCard = ({ city, continent }: CityCardProps) => {
  const href = (`${continent}/${city.slug}`).toLowerCase()

  return(
    <Link href={href} _hover={{ textDecoration: "none", filter: 'brightness(1.1)' }}>
      <Box as="li" w="256px" h="279px" borderRadius="4px" overflow="hidden">
        <Image
          src={city.banner}
          alt={city.city}
          height="175px"
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
            <Text fontSize="0.9rem">{continent}</Text>
          </Box>
          <Avatar
            size="sm"
            src={city.flag}
            name={city.city}            
          />
        </Flex>
      </Box>
    </Link>
  )
}

export { CityCard }