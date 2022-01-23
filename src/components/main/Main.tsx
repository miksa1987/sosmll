import React from "react";
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  useToast,
  ToastId,
} from "@chakra-ui/react";

import useUser from "../../state/user";
import { createShortUrl } from "../../service/db";

const Main = () => {
  const [url, setUrl] = React.useState("");
  const { user } = useUser();

  const toast = useToast();
  const toastIdRef = React.useRef<ToastId | null | undefined>(null);

  const handleUrlChange = (e: React.ChangeEvent<any>) => {
    setUrl(e.target.value);
  };

  const handleSave = async () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }

    if (
      !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g.test(
        url
      )
    ) {
      toastIdRef.current = toast({
        title: "Not a valid URL",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    let urlToSave = url.startsWith("http") ? url : `https://${url}`;
    const saved = await createShortUrl(urlToSave, user);

    setUrl("");
    const shortUrl = `${window.location.origin}/${saved.id}`;
    toastIdRef.current = toast({
      duration: null,
      isClosable: true,
      render: () => (
        <Box
          onClick={() => {
            toast.close(toastIdRef.current!);
            navigator.clipboard.writeText(shortUrl);
          }}
          display="flex"
          flexDir="column"
          justifyContent="flex-start"
          alignItems="center"
          p={3}
          bg="blue.400"
          borderRadius="5px"
        >
          <Heading size="sm">Short url created. Click to copy.</Heading>
          <br />
          {shortUrl}
        </Box>
      ),
    });
  };

  return (
    <Box width="80vw">
      <Text mb={6}fontSize="lg">So small URLs!</Text>
      <Text fontSize="md">SoSMLL is a really simple and minimalistic URL shortener</Text>
      <Input
        marginY={3}
        onChange={handleUrlChange}
        placeholder="Enter url"
      />
      <Button onClick={handleSave}>Create</Button>
    </Box>
  );
};

export default Main;
