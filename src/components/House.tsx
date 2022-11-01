import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Heading, Divider, Flex, Spacer } from '@chakra-ui/react'
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
  const { rooms, name, imgUrl, admin } = currentHouse[0]

  const { utilities, expenses } = admin


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
            <Tab>Codes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <Box mt="5" mb="5" textAlign="left">
                  <Heading as="h4" size="md">
                    Housing Costs
                  </Heading>
                  <Flex alignItems="center" direction="row">
                    <Box>
                      Mortgage
                    </Box>
                    <Spacer />
                    <Box>
                      ${expenses.mortgage}/mth
                    </Box>
                  </Flex>
                  {expenses.mortgageInsurance && (
                    <Flex alignItems="center" direction="row">
                      <Box>
                        Mortgage Insurance
                      </Box>
                      <Spacer />
                      <Box>
                        ${expenses.mortgageInsurancePrice}/mth
                      </Box>
                    </Flex>
                  )}
                </Box>
                <Divider />
                <Box>
                  <Box mt="5" mb="5" textAlign="left">
                    <Heading as="h4" size="md">
                      Utilities
                    </Heading>
                  </Box>
                  <Flex alignItems="center" direction="row">
                    <Box>
                      {utilities[0].companyName}
                    </Box>
                    <Spacer />
                    <Box>
                      {utilities[0].companyPhone}
                    </Box>
                  </Flex>
                  <Flex alignItems="center" direction="row">
                    <Box>
                      {utilities[0].type} (avg.)
                    </Box>
                    <Spacer />
                    <Box>
                      ${utilities[0].avgPrice}/mth
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Heading textAlign="left" as="h2" size="l">Rooms</Heading>
                {displayRooms()}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Heading textAlign="left" as="h2" size="l">Codes</Heading>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default HousePage;
