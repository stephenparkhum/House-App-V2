import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Heading, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import { House } from '../types/types'
import { useParams } from 'react-router-dom'
import { display } from '../utilities/display'

type Props = {
  houses: House[]
}

const HousePage = ({ houses }: Props) => {
  const { houseId } = useParams();

  const currentHouse = houses.filter(house => house.id == houseId)
  const { rooms, household, name, imgUrl, admin } = currentHouse[0]
  const { utilities, expenses } = admin

  const totals = (arr: number[]) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i]
    }
    return total
  }

  const tabs = [
    'Admin',
    'Rooms',
  ]

  if (household) { tabs.push('Household') }

  return (
    <>
      <Box>
        <Box>
          <Box mb="8">
            <Heading as="h1" size="2xl">{name ? name : 'test'}</Heading>
          </Box>
          <Box mb="8">
            <Image src={imgUrl} />
          </Box>
        </Box>
        <Tabs variant="enclosed">
          <TabList>
            {tabs.map(tab => <Tab key={tab}>{tab}</Tab>)}
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
                <Spacer />
                <Box>
                  <Flex alignItems="center" direction="row">
                    <Box>
                      Total Cost
                    </Box>
                    <Spacer />
                    <Box>
                      ${totals([expenses.mortgageInsurance ? expenses.mortgageInsurancePrice : 0, expenses.mortgage])}/mth
                    </Box>
                  </Flex>
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
                {display.roomsList(rooms, houseId)}
              </Box>
            </TabPanel>
            {household && (
              <TabPanel textAlign="left">
                <Box>
                  <Heading textAlign="left" as="h2" size="l">Household</Heading>
                  {household?.map(person => <Text key={person.name}>{person.name}</Text>)}
                </Box>
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default HousePage;
