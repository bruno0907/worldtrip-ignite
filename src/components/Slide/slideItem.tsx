import { Image, Box, Heading, Text, Flex } from "@chakra-ui/react"

interface SlideItemProps {
  heading?: string;
  text?: string;
  bgImage: string;  
}

const SlideItem = ({ heading, text, bgImage }: SlideItemProps) => {    
  return (    
    <Flex
      w="100%"
      h="100%"
      position="relative"
      align="center"
      justify="center"
      direction="column"
    >
      <Image
        src={bgImage}
        alt={heading}
        position="absolute"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="-2" 
      />
      { heading && 
        <Box w="100%" h="100%" bgColor="black" opacity="0.35" position="absolute" zIndex="-1"/>}
      <Heading color="gray.50" fontSize={["1.5rem", "3rem"]} mb="4">{heading}</Heading>
      <Text color="gray.50" fontSize={["0.9rem", "1.5rem"]} fontWeight="700">{text}</Text>
    </Flex>    
  )  
}

export { SlideItem }