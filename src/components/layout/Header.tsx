import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/configureStore';
import { setIsLoggedIn } from '../../redux/modules/verification';

export const Header = () => {
  const { isLoggedIn } = useSelector((state: RootState) => ({ isLoggedIn: state.authorized.isLoggedIn }));
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setIsLoggedIn(false))
  }
  return (
    <Box className="white">
      <header className="h-14 white py-4 px-6">
        <Box className="flex justify-between">
          <Box className="text-2xl weight-6">
            <Link to="/">Namit Softobiz</Link>
          </Box>
          <nav className="flex align-center">
            <ul className="flex align-center">
              <li className="mx-5 text-base">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="text-base">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Box>
            {isLoggedIn ?
              (<Button colorScheme="teal" onClick={handleLogout}>
                LogOut
              </Button>
              ) : (<Button colorScheme="teal">
                <Link to="/login">LogIn</Link>
              </Button>)
            }
          </Box>
        </Box>
      </header >
    </Box >
  )
}
