import React from "react";
import {
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string
  children: React.ReactNode
  closeButtonDisabled?: boolean
}
const Modal = ({ isOpen, onClose, title, children, closeButtonDisabled }: Props) => (
  <ChakraModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody mb={3}>{children}</ModalBody>
      {!closeButtonDisabled && <ModalFooter>
        <Button colorScheme="red" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>}
    </ModalContent>
  </ChakraModal>
);

export default Modal