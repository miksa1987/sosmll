import React from "react";
import { Table, Thead, Tr, Th, Td, Link, Text } from "@chakra-ui/react";
import { Link as LocalLink } from "react-router-dom";

import { Link as ILink } from "../../domain/link";
import useUser from "../../state/user";
import useLinks from "../../state/links";

const formatDate = (isoString: string) => {
  const date = new Date(isoString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

interface LinkRowProps {
  link: ILink;
}
const LinkRow = ({ link }: LinkRowProps) => (
  <Tr>
      <Td>
    <LocalLink target="_blank" to={`/${link.id.toString()}`}>
        <Text fontSize="md">{link.id}</Text>
    </LocalLink>
      </Td>
      <Td>
    <LocalLink target="_blank" to={`/${link.id.toString()}`}>
        <Text fontSize="md">{link.url}</Text>
    </LocalLink>
        </Td>
      <Td><Text fontSize="md">{formatDate(link.created)}</Text></Td>
  </Tr>
);

const Header = () => (
  <Thead>
    <Tr>
      <Th>Link id</Th>
      <Th>Link url</Th>
      <Th>Link created</Th>
    </Tr>
  </Thead>
);

const LinksByUser = () => {
  const { user } = useUser();
  const { links } = useLinks(user?.id ?? "");

  return (
    <Table>
      <Header />
      {links?.map((link) => <LinkRow key={link.id} link={link} />) ?? []}
    </Table>
  );
};

export default LinksByUser;
