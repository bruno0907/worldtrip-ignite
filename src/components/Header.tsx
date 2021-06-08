import { Flex, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Header = () => {
  const { asPath: path, back } = useRouter()  
    
  return (      
    <Flex m="0 auto" w="100%" maxW="1440px" p={["6", "8"]} align="center" justify="center">
      { path !== '/' ? (
        <>          
          <ChevronLeftIcon boxSize={10} mr="auto" onClick={back} cursor="pointer" />     
          <Link href="/" mr="auto" >
            <Image src="/logo.svg"/>            
          </Link>
        </>
      ) : (
        <Link href="/">
          <Image src="/logo.svg"/>            
        </Link>
      )}
    </Flex> 
    
  )
}

export { Header }