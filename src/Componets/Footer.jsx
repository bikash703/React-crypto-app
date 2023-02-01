import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box  bgColor={'blackAlpha.900'} minH={'48'} color={'whiteAlpha.700'} px={'16'} py={['16','8']}>

    <Stack  direction={['column','row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center','flex-start']}>
            <Text fontWeight={'bold'}>About us</Text>
            <Text fontSize={'sm'} letterSpacing={"widest"} >We are the best crypto trading app in india, we provide our guidance at a very cheap price. </Text>
        </VStack>
        <VStack>
            <Avatar filter={'grayScale(0.7)'} src={'https://avatars.githubusercontent.com/u/98630071?s=400&u=663c6973f2881980030da5fc88dea240f788b696&v=4'} boxSize={'28'} mt={['4','0']} />
            <Text>Bikash Majhi </Text>
        </VStack>
    </Stack>
    </Box>

  )
}

export default Footer
