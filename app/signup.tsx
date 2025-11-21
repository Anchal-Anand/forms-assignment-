import { Formik } from "formik";
import { Text, View } from "react-native";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function SignUp() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 20 }}>Sign Up</Text>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <FormInput
              label="Name"
              value={values.name}
              onChangeText={handleChange("name")}
            />

            <FormInput
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
            />

            <FormInput
              label="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
            />

             <SubmitButton title="Sign In" onPress={() => handleSubmit()} />
                     </>
                   )}
                 </Formik>
               </View>
             );
           }
           