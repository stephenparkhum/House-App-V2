import { Box, Grid, Image, Flex, GridItem, Heading } from '@chakra-ui/react'
import { Appliance } from '../types/types'

type Props = {
  appliances: Appliance[],

}

const Appliances = ({ appliances }: Props) => {
  const displayAppliances = () => {
    return appliances.map((a) => {
      return (
        <GridItem>
          <Flex direction="column">
            <Image src={a.imgUrl} />
            {a.name}
            <small>{a.make}</small>
          </Flex>
        </GridItem>
      )
    })
  }

  return (
    <Box>
      <Heading mb="5">Appliances</Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {displayAppliances()}
      </Grid>
    </Box>
  )
}

export default Appliances
