import { Box, Heading, Text } from '@chakra-ui/react'
import { Person } from '../types/types'

interface Props {
  household: Person[],
}

const Household = ({ household }: Props) => {
  return (
    <Box>
      <Heading>Household</Heading>
      <Box>
        <Text>
          {household[0].name}
        </Text>

      </Box>
    </Box>
  )
}

export default Household;
