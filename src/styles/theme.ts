import { extendTheme } from "@chakra-ui/react";

const colors = {
  yellow: {
    '400': '#FFBA08'
  }
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
}

const styles = {
  global: {    
    body: {
      bg: 'gray.50',
      color: 'gray.600',
    }
  }
}

const theme = extendTheme({
  colors, 
  fonts, 
  styles
})


export { theme }