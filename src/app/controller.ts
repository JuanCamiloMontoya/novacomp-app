import { useRouter } from "expo-router";

export const useHome = () => {
  const router = useRouter();

  const onPressTasks = () => {
    router.push("/tasks");
  };

  const onPressList = () => {
    router.push("/list");
  };

  return { onPressTasks, onPressList };
};
