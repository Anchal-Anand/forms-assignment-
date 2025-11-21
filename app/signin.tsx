import { Formik } from "formik";
import { Text, View } from "react-native";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignIn() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 20 }}>Sign In</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <FormInput
              label="Email"
              onChangeText={handleChange("email")}
              value={values.email}
            />

            <FormInput
              label="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              value={values.password}
            />

            {/*  onPress type issue */}
            <SubmitButton title="Sign In" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </View>
  );
}
