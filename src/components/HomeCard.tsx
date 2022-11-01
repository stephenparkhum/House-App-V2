import { LinkBox, Box, Image, Badge, LinkOverlay } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
// import React from 'react'
import { House } from '../types/types'

type Props = {
  house: House
}

const HouseCard = ({ house }: Props) => {

  const beds = house.rooms.length;
  const { isAirbnb } = house;

  return (
    <>
      <LinkBox marginBottom="5" maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <LinkOverlay href={`/house/${house.id}`}>
          <Box>
            <Image src={house.imgUrl ? house.imgUrl : ''} alt={house.name} />
            <Box p="5">
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme={!!isAirbnb ? 'red' : 'yellow'}>
                  {!!isAirbnb ? 'Airbnb' : 'Residence'}
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
              {isAirbnb && (
                <>
                  <Box>
                    ${house.airbnbPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                      / night
                    </Box>
                  </Box>

                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < 4 ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {house.baths} reviews
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </>
  )
}

export default HouseCard;
