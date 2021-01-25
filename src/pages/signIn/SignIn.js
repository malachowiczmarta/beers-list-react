import React from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input name="firstName" ref={register} />
      <input type="submit" />
    </form>
  );
}
