import { Flex, Image } from '@chakra-ui/react'

const Header = () => {
  return (      
    <Flex p={["6", "8"]} align="center" justify="center">
      <Image src="/logo.svg"/>
    </Flex> 
    
  )
}

export { Header }