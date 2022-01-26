import React, { useEffect } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useLinks from "./state/links";
import useUser from "./state/user";
import Page from "./components/common/Page";
import { Main, Link, LinksByUser } from "./components";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<Link />} />
      <Route path="/mylinks" element={<LinksByUser />} />
    </Routes>
  );
};

export const App = () => {
  const { checkUser, user } = useUser();
  const { getLinks } = useLinks(user?.id ?? "");

  useEffect(() => {
    setTimeout(checkUser, 1000)
  }, [checkUser]);

  useEffect(() => {
    if (user) {
      getLinks();
    }
  }, [user, getLinks]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Page userIsLoggedIn={!!user}>
          <Routing />
        </Page>
      </Router>
    </ChakraProvider>
  );
};
