import { Formik } from "formik";
import { Alert, Text, View } from "react-native";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import { login } from "../firebase/authService"; // Firebase login function

// Validation schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignIn() {
  // Handle login
  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      Alert.alert("Success", "Login successful!");
    } catch (error: any) {
      console.log("Login error:", error);
      Alert.alert("Login Failed", error.message || "Something went wrong");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 20 }}>Sign In</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <FormInput
              label="Email"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red", marginBottom: 10 }}>{errors.email}</Text>
            )}

            <FormInput
              label="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red", marginBottom: 10 }}>{errors.password}</Text>
            )}

            <SubmitButton title="Sign In" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </View>
  );
}
