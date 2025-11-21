import { Formik } from "formik";
import { Text, View } from "react-native";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const EmployeeSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  age: Yup.number().required(),
  position: Yup.string().required(),
  department: Yup.string().required(),
});

export default function EmployeeForm() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26 }}>Employee Information</Text>

      <Formik
        initialValues={{
          name: "",
          email: "",
          age: "",
          position: "",
          department: "",
        }}
        validationSchema={EmployeeSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <FormInput label="Name" onChangeText={handleChange("name")} />
            <FormInput label="Email" onChangeText={handleChange("email")} />
            <FormInput label="Age" onChangeText={handleChange("age")} />
            <FormInput label="Position" onChangeText={handleChange("position")} />
            <FormInput
              label="Department"
              onChangeText={handleChange("department")}
            />

            <SubmitButton title="Sign In" onPress={() => handleSubmit()} />
                    </>
                  )}
                </Formik>
              </View>
            );
          }
          