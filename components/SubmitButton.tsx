import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";

type SubmitButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function SubmitButton({ title, onPress }: SubmitButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  txt: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
