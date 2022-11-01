import { Box, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { House } from '../types/types'
import { useParams } from 'react-router-dom'

type Props = {
  houses: House[]
}

const HousePage = ({ houses }: Props) => {
  const { houseId } = useParams();

  const currentHouse = houses.filter(house => house.id == houseId)
  const { name, imgUrl } = currentHouse[0]


  return (
    <>
      <Box>
        <Box>
          <Image src={imgUrl} />
        </Box>
        <Box>
          <Heading>{name ? name : 'test'}</Heading>
        </Box>
      </Box>
    </>
  )
}

export default HousePage;
