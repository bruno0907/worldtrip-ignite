import { Link, Image, Box, Heading, Text, Flex } from "@chakra-ui/react"
interface SlideItemProps {
  heading?: string;
  text?: string;
  bgImage: string;
  href?: string;
}

const SlideItem = ({ heading, text, bgImage, href }: SlideItemProps) => {
  return (    
    <Link href={href} _hover={{ textDecoration: 'none' }}>
      <Flex w="100%" h="100%" position="relative" align="center" justify="center" direction="column">
        <Image src={bgImage} alt="" position="absolute" width="100%" height="100%" objectFit="cover" zIndex="-2"/>
        <Box w="100%" h="100%" bgColor="black" opacity="0.35" position="absolute" zIndex="-1"/>
        <Heading color="gray.50" fontSize="5xl" mb="4">{heading}</Heading>
        <Text color="gray.50" fontSize="2xl" fontWeight="700">{text}</Text>
      </Flex>
    </Link>    
  )
}

export { SlideItem }