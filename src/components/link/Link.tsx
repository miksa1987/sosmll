import React from "react";
import { useParams } from "react-router-dom";
import { getShortUrl } from "../../service/db";

const Link = () => {
  const { id } = useParams();

  const navigateToUrl = React.useCallback(async () => {
    const { url } = await getShortUrl(Number(id!));
    window.location.href = url;
  }, [id]);

  React.useEffect(() => {
    if (id) {
      navigateToUrl();
    }
  }, [id, navigateToUrl]);

  return null;
};

export default Link;
