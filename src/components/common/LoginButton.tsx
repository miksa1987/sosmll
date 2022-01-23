import React, { useState } from "react";
import { Button, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";
import { signInWithGoogle } from "../../service/auth";
import Modal from '../common/Modal'

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const LoginButton: React.FC<ColorModeSwitcherProps> = (props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const onModalClose = () => {
    setModalOpen(false)
  }

  const onModalOpen = () => {
    setModalOpen(true)
  }

  const login = async () => {
    await signInWithGoogle();
  };

  return (
    <>
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={onModalOpen}
      icon={<FaSignInAlt />}
      aria-label={`Log in`}
      {...props}
    />
    <Modal title="Log in" isOpen={modalOpen} onClose={onModalClose} closeButtonDisabled>
      <Button colorScheme="blue" onClick={login}>Sign in with Google</Button>
    </Modal>
    </>
  );
};
