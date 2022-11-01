import { Box, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { House } from '../types/types'
import { useParams } from 'react-router-dom'
import RoomButton from './RoomButton'

type Props = {
  houses: House[]
}

const HousePage = ({ houses }: Props) => {
  const { houseId } = useParams();

  const currentHouse = houses.filter(house => house.id == houseId)
  const { rooms, name, imgUrl } = currentHouse[0]


  const displayRooms = () => {
    return rooms.map((room, idx) => {
      return (<RoomButton idx={idx} room={room} />)
    })
  }

  return (
    <>
      <Box>
        <Box>
          <Box mb="8">
            <Image src={imgUrl} />
          </Box>
          <Box mb="8">
            <Heading as="h1" size="2xl">{name ? name : 'test'}</Heading>
          </Box>
        </Box>
        <Box>
          <Heading textAlign="left" as="h2" size="xl">Rooms</Heading>
          {displayRooms()}
        </Box>
      </Box>
    </>
  )
}

export default HousePage;
