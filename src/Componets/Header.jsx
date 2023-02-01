import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} bgColor={'blackAlpha.900'} shadow={'base'} color={'white'} >
      <Button variant={'unstyled'} p={'2'}>
       <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={'unstyled'} p={'2'}>
       <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={'unstyled'} p={'2'}>
       <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header
