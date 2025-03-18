"use client";
import React, { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameVal = name.current!.value;
    const passwordVal = email.current!.value;
    const emailVal = password.current!.value;
    setSubmittedData(() => {
      // or you can use useEffect hook to log data
      const updatedValue = {
        name: nameVal,
        email: emailVal,
        password: passwordVal,
      };
      console.log(updatedValue);
      return updatedValue;
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="enter your name" />
        <input type="text" ref={email} placeholder="enter your email" />
        <input type="text" ref={password} placeholder="enter your password" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
