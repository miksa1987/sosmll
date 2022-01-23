import { supabase } from "./supabase";

export const signInWithGoogle = async () => {
  const { error } = await supabase!.auth.signIn({
    provider: "google",
  });

  if (error) {
    throw new Error(error.message);
  }
};

export const getUser = async () => {
  return await supabase!.auth.user();
};
