import React, { useState} from "react";
import { Link as LocalLink } from "react-router-dom";
import {
  Box,
  VStack,
  Grid,
  Heading,
  Text
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import Modal from './Modal'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}
const InfoModal = ({ isOpen, onClose}: ModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Information">
    <Text fontSize="sm" mb={3}>
      SoSMLL is a minimalistic URL shortener made by Mika Laaksonen.
    </Text>
    <Text fontSize="sm" mb={3}>
      Links can be created without an user account. You can sign in via Google to see collection of your links at later time.
    </Text>
    <Text fontSize="sm" mb={3}>
      All user data and link data is stored in Supabase database. Only your Supabase-specific user id is stored on the database.
    </Text>
    <Text fontSize="sm" mb={3}>
      Ads will be used on the site to support the developer.
    </Text>
  </Modal>
)

interface Props {
  children: React.ReactNode;
  userIsLoggedIn: boolean;
}

const Header = ({ userIsLoggedIn }: Omit<Props, "children">) => (
  <Box justifyContent="space-between" display="flex" flexDir="row">
    <Box>
      <LocalLink to="/">
        <Heading size="md">soSMLL</Heading>
      </LocalLink>
    </Box>
    {userIsLoggedIn &&
    <Box display="flex" flexDir="row">
      <LocalLink to="/mylinks">
        <Heading size="sm">{` `}My links</Heading>
      </LocalLink>
    </Box>
    }
    <Box>
      {userIsLoggedIn ? <LogoutButton /> : <LoginButton />}
      <ColorModeSwitcher />
    </Box>
  </Box>
);

const Page = ({ children, userIsLoggedIn }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const onModalOpen = () => {
    setModalOpen(true)
  }

  const onModalClose = () => {
    setModalOpen(false)
  }

  return (
    <>
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Header userIsLoggedIn={userIsLoggedIn} />
      <VStack spacing={12}>{children}</VStack>
      <Box justifySelf="flex-end" alignSelf="flex-end">
        <Text fontSize="sm" onClick={onModalOpen} cursor="pointer">Information</Text>
      </Box>
    </Grid>
  </Box>
  <InfoModal isOpen={modalOpen} onClose={onModalClose} />
    </>
);
  }

export default Page;
