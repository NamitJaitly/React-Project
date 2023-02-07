import { Box } from "@chakra-ui/react"
import { useParams } from "react-router"

export const DeleteUser = () => {
  const {id} = useParams()
  return (
    <Box>DeleteUser {id}</Box>
  )
}
