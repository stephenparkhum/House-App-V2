import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Heading } from '@chakra-ui/react'
// import React from 'react'
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
      return (<RoomButton houseId={houseId} idx={idx} room={room} />)
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
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Admin</Tab>
            <Tab>Rooms</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <h1>Admin</h1>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Heading textAlign="left" as="h2" size="l">Rooms</Heading>
                {displayRooms()}
              </Box>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default HousePage;
