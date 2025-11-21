import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms Assignment</Text>

      <View style={styles.buttonsContainer}>
        <Link href="/signin" style={styles.button}>
          <Text style={styles.buttonText}>Sign In Form</Text>
        </Link>

        <Link href="/signup" style={styles.button}>
          <Text style={styles.buttonText}>Sign Up Form</Text>
        </Link>

        <Link href="/employee" style={styles.button}>
          <Text style={styles.buttonText}>Employee Information Form</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#F4F6F9",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 40,
    color: "#333",
  },

  buttonsContainer: {
    width: "80%",
    gap: 20, // spacing between buttons
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
