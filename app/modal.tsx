import React, { useState } from "react";
import { Button, Modal, TextInput, View } from "react-native";

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  addTask: (taskText: string) => void;
}

export default function TaskModal({ modalVisible, setModalVisible, addTask }: Props) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = () => {
    addTask(taskText);
    setTaskText("");
    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Enter task"
          value={taskText}
          onChangeText={setTaskText}
          style={{ borderWidth: 1, padding: 10, borderRadius: 6 }}
        />
        <Button title="Add Task" onPress={handleSubmit} />
        <Button title="Cancel" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
}
