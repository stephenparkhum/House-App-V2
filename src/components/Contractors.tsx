import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Contractor } from '../types/types'

type Props = {
  contractors: Contractor[]
}

const Contractors = ({ contractors }: Props) => {

  const displayContractors = () => {
    return contractors.map(c => <li>{c.name}</li>)
  }

  return (
    <Box >
      <Heading>
        Contractors
      </Heading>
      <Box textAlign="left">
        <ul>
          {displayContractors()}
        </ul>
      </Box>
    </Box>
  )
}

export default Contractors;

