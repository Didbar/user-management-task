import { Link as ChakraLink, HStack, Image } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import ColorModeSwitch from 'src/components/ColorModeSwitch'
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack padding="0.4rem" justify="space-between" boxShadow="lg">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <ChakraLink as={NavLink} to="/users">
        Users
      </ChakraLink>
      <ChakraLink as={NavLink} to="/groups">
        Group
      </ChakraLink>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
