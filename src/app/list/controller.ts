import { useSelector } from "react-redux";
import { usersActions } from "../../services/users/slice";
import { RootState, useAppDispatch } from "../../store/store";
import { useEffect } from "react";

export const useUsers = () => {
  const dispatch = useAppDispatch();

  const { getUsers } = usersActions;

  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers({}));
  }, []);

  return {
    users,
    isLoading,
    error,
  };
};
