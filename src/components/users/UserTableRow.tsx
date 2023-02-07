import { Fragment } from "react"
import { IUSERS } from "../../common/interfaces/Users"
import {
  Td,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../redux/configureStore"
import { deleteUser } from "../../redux/modules/users"

export const UserTableRow = (props: PropTypes) => {
  const { data } = props
  const { isLoggedIn } = useSelector((state: RootState) => ({ isLoggedIn: state.authorized.isLoggedIn }));
  const dispatch = useAppDispatch()
  const deletUser = () => {
    const id = data.id
    dispatch(deleteUser(id))
    window.location.reload()
  }
  return (
    <Fragment>
      <Td>{data.id}</Td>
      {
        isLoggedIn ?
          <Td>
            <Link to={`/dashboard/user/${data.id}`} className="flex align-center">
              <Box className="profile-image mr-2"><Image src={data.profileImg} /></Box>
              {data.name}
            </Link>
          </Td> :
          <Td>
            <Box className="flex align-center">
              <Box className="profile-image mr-2"><Image src={data.profileImg} /></Box>
              {data.name}
            </Box>
          </Td>
      }
      <Td>{data.age}</Td>
      <Td>{data.gender}</Td>
      <Td>{data.email}</Td>
      {
        isLoggedIn ?
          <Td>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} />
              <MenuList>
                <MenuItem><Link to={`/dashboard/${data.id}/EditUser`}>Edit User</Link></MenuItem>
                <MenuItem onClick={deletUser}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Td> :
          null
      }
    </Fragment>
  )
}

interface PropTypes {
  data: IUSERS
}