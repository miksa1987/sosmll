import { User } from "../domain/user";
import { supabase } from "./supabase";

const SHORT_URLS_TABLE = "short_links";

export const createShortUrl = async (url: string, user: User | null) => {
  const { data, error } = await supabase!.from(SHORT_URLS_TABLE).insert([
    {
      url,
      user_id: user ? user.id : null,
    },
  ]);

  if (error) {
    console.log(error);
    throw new Error("oh shit");
  }

  return data?.length === 1 ? data[0] : null;
};

export const getShortUrl = async (id: number) => {
  const { data, error } = await supabase!
    .from(SHORT_URLS_TABLE)
    .select()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("oh shit");
  }

  return data?.length === 1 ? data[0] : null;
};

export const getShortUrlsByUser = async (userId: string) => {
  const { data, error } = await supabase!
    .from(SHORT_URLS_TABLE)
    .select()
    .eq("user_id", userId);

  if (error) {
    console.log(error);
    throw new Error("oh shit");
  }

  return data;
};
