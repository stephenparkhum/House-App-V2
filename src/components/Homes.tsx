import { Box, Heading } from '@chakra-ui/react'
import testUser from '../data/data'
import { display } from '../utilities/display';

const Homes = () => {
  const { houses } = testUser;
  const label = 'Your Homes'

  return (
    <Box>
      <Heading textAlign="center">
        {label.toUpperCase()}
      </Heading>
      <Box textAlign="left">
        {display.homesList(houses)}
      </Box>
    </Box>
  )
}

export default Homes;
