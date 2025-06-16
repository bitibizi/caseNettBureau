export default function validate(field, value) {
  
  if (field.required && !value) return "Dette feltet er påkrevd";

  
  if (field.type === "email" && value) {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(value)) return "Ugyldig e-postadresse";
  }

 
  if (
    (field.name === "address_street_name" || field.name === "name") &&
    typeof value !== "string"
  ) {
    return "Må være tekst";
  }

  
  if (field.name === "property_type" && (!value || value === "")) {
    return "Du må velge boligtype";
  }

  return "";
}

