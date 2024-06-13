import React from "react";
import {
  View,
  FlatList,
  Text,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useTask } from "./controller";
import { styles } from "./styles";
import { Button } from "../_components/button";

const Tasks = () => {
  const {
    modalVisible,
    tasks,
    taskDescription,
    handleAddTask,
    hideModal,
    showModal,
    setTaskDescription,
  } = useTask();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Button title="New Task" onPress={showModal} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.taskDescription}>{item.description}</Text>
        )}
      />
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="New Task Name"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <Button title="Add" onPress={handleAddTask} />
          <Button title="Cancel" onPress={hideModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Tasks;
