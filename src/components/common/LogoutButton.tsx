import React, { useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import useUser from "../../state/user";
import Modal from '../common/Modal'

export const LogoutButton: React.FC<Record<string, never>> = (props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const { signOut } = useUser()

  const onModalClose = () => {
    setModalOpen(false)
  }

  const onModalOpen = () => {
    setModalOpen(true)
  }

  return (
    <>
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={onModalOpen}
      icon={<FaSignOutAlt />}
      aria-label={`Log out`}
      {...props}
    />
    <Modal title="Log in" isOpen={modalOpen} onClose={onModalClose} closeButtonDisabled>
      <Button colorScheme="blue" onClick={signOut}>Sign out of your account</Button>
    </Modal>
    </>
  );
};
