import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Navbar } from '../components/Navbar'

const Index = () => (
  <Container height="100vh">
    <Navbar/>
    <Hero />
    <Main>

    </Main>

    <DarkModeSwitch />
  
  </Container>
)

export default Index


// <Footer>
{/* <Text>Next ❤️ Chakra</Text>
</Footer> */}