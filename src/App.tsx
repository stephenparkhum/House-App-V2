// import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Heading,
  Flex,
  Spacer,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
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
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import Contractors from "./components/Contractors";


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
    element: <Contractors contractors={testUser.houses[0].admin.contractors} />,
  },
]);

export const App = () => {
  const { name } = SiteData;

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <Flex mb="10">
            <Link href="/">
              <Heading>{name}</Heading>
            </Link>
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <Link href="/">
                  <MenuItem>
                    Your Houses
                  </MenuItem>
                </Link>
                <Link href="/contractors">
                  <MenuItem>
                    Contractors
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
          <RouterProvider router={router} />
        </Grid>
      </Box>
      <Flex mb="5" ml="5" mr="5" direction="row" alignItems="center">
        <Box alignSelf="center" textAlign="center">
          2022 | {name}
        </Box>
        <Spacer />
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

