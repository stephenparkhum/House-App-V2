import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { House } from '../types/types'
import { useParams } from 'react-router-dom'

type Props = {
  houses: House[]
}

const HousePage = ({ houses }: Props) => {
  const { houseId } = useParams();

  const currentHouse = houses.filter(house => house.id == houseId)
  const { name } = currentHouse[0]


  return (
    <>
      <Box>
        <Heading>{name ? name : 'test'}</Heading>
      </Box>
    </>
  )
}

export default HousePage;
