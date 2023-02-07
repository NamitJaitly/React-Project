import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "../components/layout"
import { Box } from '@chakra-ui/react'
import { AuthHOC } from "../components"

export const Home = () => {
  return (

    // <AuthHOC>
      <Box className="blue lighten-3">
        <Header />
        <Outlet />
        <Footer />
      </Box>

    // </AuthHOC>
  )
}
