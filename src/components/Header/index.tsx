import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Header = () => {
  const { asPath: path, back } = useRouter()  
    
  return (      
    <Flex m="0 auto" w="100%" maxW="1440px" p={["4", "8"]} align="center" justify="center">
      { path !== '/' ? (
        <>          
          <ChevronLeftIcon boxSize={[5, 10]} mr="auto" onClick={back} cursor="pointer" />     
          <Link href="/" mr="auto" >            
            <Image height={["20px", "46px"]} src="/logo.svg" alt="Logo"/>            
          </Link>
        </>
      ) : (
        <Link href="/">
          <Image height={["20px", "46px"]} src="/logo.svg" alt="Logo"/>            
        </Link>
      )}
    </Flex> 
    
  )
}

export { Header }