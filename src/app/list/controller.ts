import { useSelector } from "react-redux";
import { usersActions } from "../../services/users/slice";
import { RootState, useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { router } from "expo-router";

export const useUsers = () => {
  const dispatch = useAppDispatch();

  const { getUsers } = usersActions;

  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers({}));
  }, []);

  const goBack = () => {
    router.back();
  };

  return {
    users,
    isLoading,
    error,
    goBack,
  };
};
