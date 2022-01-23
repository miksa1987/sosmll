interface UserMetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
}

export interface UserFromAuth {
  confirmed_at?: string | undefined;
  created_at: string;
  email?: string | undefined;
  email_confirmed_at?: string | undefined;
  id: string;
  last_sign_in_at?: string | undefined;
  phone?: string | undefined;
  role?: string | undefined;
  updated_at?: string | undefined;
  user_metadata: UserMetadata;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  picture: string;
  avatarUrl: string;
}
