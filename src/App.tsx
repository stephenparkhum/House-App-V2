// import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Homes from "./components/Homes"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HousePage from './components/House'

import testUser from './data/data'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes />,
  },
  {
    path: "/house/:houseId",
    element: <HousePage houses={testUser.houses} />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <RouterProvider router={router} />
      </Grid>
    </Box>
  </ChakraProvider>
)
