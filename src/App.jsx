import React from "react";
import DynamicForm from "./components/DynamicForm";
import formConfig from "./data/formConfig.json";

export default function App() {
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <DynamicForm config={formConfig} />
    </div>
  );
}