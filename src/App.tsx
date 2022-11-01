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
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <RouterProvider router={router} />
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

