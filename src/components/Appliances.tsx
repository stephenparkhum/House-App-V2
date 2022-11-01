import { Box } from '@chakra-ui/react'
import { Appliance } from '../types/types'

type Props = {
  appliances: Appliance[],

}

const Appliances = ({ appliances }: Props) => {
  return (
    <Box>
      {appliances.map((a) => { return <p>{a.name}</p> })}
    </Box>

  )

}

export default Appliances
