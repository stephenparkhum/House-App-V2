// import React from 'react'
import { Box, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import testUser from '../data/data'
import { House } from '../types/types';
import HouseCard from './HomeCard';

const Homes = () => {
  const { houses } = testUser;

  const displayHomesList = (houses: House[]) => {
    return houses.map((house: House) => {
      return (
        <HouseCard house={house} />
      )
    })
  }

  return (
    <Box>
      <Box textAlign="left">
        <Heading>
          Your Homes
        </Heading>
        {displayHomesList(houses)}
      </Box>
    </Box>
  )
}

export default Homes;
