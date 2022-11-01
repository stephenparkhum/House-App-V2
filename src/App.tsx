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
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import Contractors from "./components/Contractors";
import Appliances from "./components/Appliances";


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


const menu = [
  'Your Houses',
  'Contractors',
  'Appliances'
]

const displayMenu = () => {
  return menu.map((item) => {
    return (
      <Link href={item === 'Your Houses' ? '/' : `/${item.toLowerCase()}`}>
        <MenuItem>
          {item}
        </MenuItem>
      </Link>
    )
  })
}

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
                aria-label='Menu'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                {displayMenu()}
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

