import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

import { getShortUrlsByUser } from "../service/db";
import { Link } from "../domain/link";

const linksState = atom<null | Link[]>({
  default: null,
  key: "links",
});

const useLinks = (userId: string) => {
  const [state, setState] = useRecoilState(linksState);

  const getLinks = useCallback(async () => {
    const links = await getShortUrlsByUser(userId);
    setState(links);
  }, [setState, userId]);

  return { getLinks, links: state };
};

export default useLinks;
