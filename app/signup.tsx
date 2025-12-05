import { Formik } from "formik";
import { Alert, Text, View } from "react-native";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import { register } from "../firebase/authService"; // Firebase register function

// Validation schema
const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignUp() {
  // Handle registration
  const handleSignUp = async (values: { name: string; email: string; password: string }) => {
    try {
      await register(values.email, values.password);
      Alert.alert("Success", "Account created successfully!");
    } catch (error: any) {
      console.log("Sign Up error:", error);
      Alert.alert("Sign Up Failed", error.message || "Something went wrong");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 20 }}>Sign Up</Text>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <FormInput
              label="Name"
              value={values.name}
              onChangeText={handleChange("name")}
            />
            {touched.name && errors.name && (
              <Text style={{ color: "red", marginBottom: 10 }}>{errors.name}</Text>
            )}

            <FormInput
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red", marginBottom: 10 }}>{errors.email}</Text>
            )}

            <FormInput
              label="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red", marginBottom: 10 }}>{errors.password}</Text>
            )}

            <SubmitButton title="Sign Up" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </View>
  );
}
