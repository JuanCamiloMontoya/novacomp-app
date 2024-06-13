import { useState } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../services/tasks/slice";

export const useTask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const { addTask } = tasksActions;

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleAddTask = () => {
    if (taskDescription) {
      dispatch(addTask(taskDescription));
      setTaskDescription("");
      setModalVisible(false);
    }
  };
  return {
    tasks,
    taskDescription,
    modalVisible,
    handleAddTask,
    showModal,
    hideModal,
    setTaskDescription,
  };
};
