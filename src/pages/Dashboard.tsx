import { useEffect } from 'react'
import { DashboardHeader, Sidebar } from "../components/layout"
import { Box, Text } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/configureStore'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state: RootState) => ({ isLoggedIn: state.authorized.isLoggedIn }))
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    };
  }, [isLoggedIn])
  return (
    <Box className="purple h-screen overflow-auto">
      <Sidebar />
      <Box className="dashboard-content">
        <DashboardHeader />
        <Outlet />
      </Box>
    </Box>
  )
}
