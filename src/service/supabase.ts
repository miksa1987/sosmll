import { createClient, SupabaseClient } from "@supabase/supabase-js";

export let supabase: SupabaseClient | null = null;

export const connectSupabase = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  supabase = createClient(apiUrl!, apiKey!);
};
