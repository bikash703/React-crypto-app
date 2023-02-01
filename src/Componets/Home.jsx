import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box w={'full'} h={"85vh"} bgColor={"blackAlpha.900"} >
      <motion.div style={{ height: '80vh' }} animate={{ translateY: "20px" }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}>
        <Image w={'full'} h={'full'} objectFit={'contain'} filter={'grayScale(1)'} src={'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png'} />
      </motion.div>
      <Text mt={'-10'} fontSize={'6xl'} textAlign={'center'} color={'whiteAlpha.700'} fontWeight={'thin'} >xCrypto</Text>
    </Box>
  )
}

export default Home
