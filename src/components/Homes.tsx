import { Box, Heading } from '@chakra-ui/react'
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

  const label = 'Your Homes'

  return (
    <Box>
      <Heading textAlign="center">
        {label.toUpperCase()}
      </Heading>
      <Box textAlign="left">
        {displayHomesList(houses)}
      </Box>
    </Box>
  )
}

export default Homes;
