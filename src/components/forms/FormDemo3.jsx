import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:"all",});

  const submitHandler = (data) => {
    console.log(data);
  };
  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is Required*",
      },
    },
    contact: {
      required: {
        value: true,
        message: "Contact is required*",
      },
      pattern: {
        value: /[6-9]{1}[0-9]{9}/,
        message: "Invalid contact no",
      },
    },
    refcode: {
      required: {
        value: true,
        message: "refcode is required*",
      },
      validate: (value) =>
        value == "royal" ||
        value == "jagrut" ||
        "insert valid ref code royal is only valid",
    },
  };
  return (
    <div>
      <h1>FORM DEMO 3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", validationSchema.name)}
          ></input>
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            {...register("contact", validationSchema.contact)}
          ></input>
          <span>{errors.contact?.message}</span>
        </div>
        <div>
          <label>Ref code</label>
          <input type="text" {...register("refcode",validationSchema.refcode)}></input>
          <span>{errors.refcode?.message}</span>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
