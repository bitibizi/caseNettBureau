import { useState } from "react";
import FormField from "./FormField";
import validate from "../utils/validate";


export default function DynamicForm({ config }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};
    config.fields.forEach((field) => {
      const error = validate(field, values[field.name] || "");
      if (error) valid = false;
      newErrors[field.name] = error;
    });
    setErrors(newErrors);
    if (valid) {
      console.log("Form values:", values);
      alert("Skjema sendt! Se konsollen for data.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{config.title}</h2>
      {config.fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={values[field.name] || ""}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Send inn</button>
    </form>
  );
}