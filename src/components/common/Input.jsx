import React from "react";

export default function Input({ type="text", ...props }) {
  return <input className="input" type={type} {...props} />;
}
