import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Button, Container, Heading, HStack, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { Link } from 'react-router-dom';

const Coins = () => {
  const [coin, setCoin] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState('inr')
  const [page, setPage] = useState(1)

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"
  const btns = new Array(132).fill(1)

  const pageChange = (page) => {
    setPage(page)
    setLoading(true)
  }

  useEffect(() => {

    const fetchCoins = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoin(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchCoins()
  }, [currency, page])

  if (error) return <ErrorComponent message={'Error while fetching Coins'} />

  return (
    <Container maxW={'container.lg'} >
      {
        loading ? (<Loader />) :
          <>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value='inr'>INR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
            <HStack wrap={'wrap'} justifyContent={'space-evenly'} >
              {
                coin.map((i) => (
                  <CoinCard id={i.id} key={i.id} name={i.name} image={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} />
                ))
              }
            </HStack>

            <HStack p={'4'} overflowX={'auto'}>
              {
                btns.map((item, index)=>(
                  <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={() => pageChange(index+1)}>{index+1}</Button>

                ))
              }
            </HStack>
          </>
      }
    </Container>
  )
}


const CoinCard = ({ id, name, image, currencySymbol, symbol, price }) => (
  <Link to={`/coins/${id}`} >
    <VStack p={"7"} w={'52'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.3s'} m={'3'} css={{ "&:hover": { transform: "scale(1.1)" } }}>
      <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt={'Exchanges'} />
      <Heading size={'md'} noOfLines={1} >
        {symbol}
      </Heading>
      <Text size={'md'} noOfLines={1}>{name}</Text>
      <Text size={'md'} >
        {
          price ? `${currencySymbol}${price}` : 'NA'
        }
      </Text>

    </VStack>

  </Link>
)

export default Coins
