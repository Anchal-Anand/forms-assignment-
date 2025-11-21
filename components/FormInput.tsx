import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type FormInputProps = TextInputProps & {
  label: string;
};

export default function FormInput({ label, ...props }: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={label}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { marginBottom: 5, fontWeight: "600" },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
