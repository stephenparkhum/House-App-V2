// import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Spacer,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Container,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Homes from "./components/Homes"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HousePage from './components/House'

import testUser from './data/data'
import { SiteData } from './data/siteData'
import Room from "./components/Room";
import { HamburgerIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import Contractors from "./components/Contractors";
import Appliances from "./components/Appliances";
import { MARGIN } from "./globals/styling";
import { display } from "./utilities/display";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes />,
  },
  {
    path: "/house/:houseId",
    element: <HousePage houses={testUser.houses} />,
  },
  {
    path: "/house/:houseId/room/:roomId",
    element: <Room houses={testUser.houses} />,
  },
  {
    path: "/contractors",
    element: <Contractors contractors={testUser.contractors} />,
  },
  {
    path: "/appliances",
    element: <Appliances appliances={testUser.appliances} />,
  },
]);


export const App = () => {
  const { name } = SiteData;

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Box marginTop={`${MARGIN / 2}`} marginBottom={`${MARGIN / 2}`} textAlign="center" fontSize="xl">
          <Grid>
            <Flex mb="10">
              <Link href="/">
                <ChevronLeftIcon />
              </Link>
              <Spacer />
              <Box>
                <Heading>
                  {name}
                </Heading>
              </Box>
              <Spacer />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Menu'
                  icon={<HamburgerIcon />}
                  variant='outline'
                />
                <MenuList>
                  {display.menu()}
                </MenuList>
              </Menu>
            </Flex>
            <RouterProvider router={router} />
          </Grid>
        </Box>
        <Flex mb="5" direction="row" alignItems="center">
          <Box alignSelf="center" textAlign="center">
            2022 | {name}
          </Box>
          <Spacer />
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

