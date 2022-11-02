import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box, Heading
} from '@chakra-ui/react'
import React from 'react'
import { Contractor } from '../types/types'

type Props = {
  contractors: Contractor[]
}

const Contractors = ({ contractors }: Props) => {

  const displayContractors = () => {
    return contractors.map(c => {
      return (
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <Heading as="h3" size="2xl">
              <AccordionButton>
                <Box flex='1' fontWeight="bold" textAlign='left'>
                  {c.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={3}>
              <ul>
                <li>
                  Contact: {c.phoneNumber}
                </li>
                <li>
                  Specialty: {c.specialty}
                </li>
                <li>
                  Price/hr: ${c.costPerHour}
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )
    })
  }

  return (
    <Box >
      <Heading>
        Contractors
      </Heading>
      <Box mt="5" textAlign="left">
        {displayContractors()}
      </Box>
    </Box>
  )
}

export default Contractors;

