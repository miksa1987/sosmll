import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { UserFromAuth, User } from "../domain/user";
import { getUser } from "../service/auth";

const userState = atom<User | null>({
  default: null,
  key: "user",
});

const userFromAuthToUser = (user: UserFromAuth): User => ({
  id: user.id,
  fullName: user.user_metadata.full_name,
  email: user.email ?? "",
  phone: user.phone ?? "",
  picture: user.user_metadata.picture,
  avatarUrl: user.user_metadata.avatar_url,
});

const useUser = () => {
  const [state, setState] = useRecoilState(userState);

  const checkUser = useCallback(async () => {
    const user = (await getUser()) as unknown as UserFromAuth;
    if (user) {
      setState(userFromAuthToUser(user));
    } else {
      setState(null);
    }
  }, [setState]);

  const signOut = useCallback(async () => {
    localStorage.removeItem('supabase.auth.token')
    window.location.reload()
    setState(null);
  }, [setState]);

  return { checkUser, signOut, user: state };
};

export default useUser;
