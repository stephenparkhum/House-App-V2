import { Box, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
// import React from 'react'
import { House } from '../types/types'

type Props = {
  house: House
}

const HouseCard = ({ house }: Props) => {

  const beds = house.rooms.length;

  return (
    <>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {beds} beds &bull; {house.baths} baths
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {house.name}
          </Box>

          <Box>
            {house.airbnbPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < house.baths ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {house.baths} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HouseCard;
