import formSchema from "../../data/formSchema.json";
import DynamicForm from "../components/DynamicForm";

export default function SignupPage() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    localStorage.setItem("signupData", JSON.stringify(data));
    alert("Signup data saved in localStorage!");
  };

  return (
    <DynamicForm
      fields={formSchema.data.map((field) => ({
        ...field,
        fieldType: field.fieldType as "TEXT" | "LIST" | "RADIO",
      }))}
      onSubmit={handleSubmit}
    />
  );
}