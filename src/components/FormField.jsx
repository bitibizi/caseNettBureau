function FormField({ field, value, error, onChange }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>
        {field.label}
        {field.required && " *"}
        <br />
        {field.type === "select" ? (
          <select
            name={field.name}
            value={value}
            onChange={onChange}
            required={field.required}
          >
            <option value="">Velg...</option>
            {field.options &&
              field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={value}
            onChange={onChange}
            required={field.required}
          />
        )}
      </label>
      {error && <div style={{ color: "red", fontSize: 12 }}>{error}</div>}
    </div>
  );
}

export default FormField;