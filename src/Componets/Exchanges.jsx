import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
  const [exchange, setExchange] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {

    const fetchExchanges = async () => {

      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setExchange(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchExchanges()
  }, [])

  if(error) return <ErrorComponent message={'Error while fetching Exchanges'} />

  return (
    <Container maxW={'container.lg'}>
      {
        loading ? (<Loader />) :
          <>
            <HStack wrap={'wrap'} justifyContent={'space-evenly'} >
              {
                exchange.map((i) => (
                  <ExchangeCard key={i.id} name={i.name} image={i.image} url={i.url} rank={i.trust_score_rank} />
                ))
              }
            </HStack>
          </>
      }
    </Container>
  )
}



const ExchangeCard = ({ name, image, url, rank }) => (
  <a href={url} target={'blank'}>
    <VStack p={"8"} w={'52'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.3s'} m={'3'} css={{ "&:hover": { transform: "scale(1.1)" } }}>
      <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt={'Exchanges'} />
      <Heading size={'md'} noOfLines={1} >
        {rank}
      </Heading>
      <Text size={'md'} noOfLines={1}>
        {name}
      </Text>

    </VStack>

  </a>
)

export default Exchanges
