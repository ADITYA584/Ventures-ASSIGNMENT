"use client";
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { RegistrationSchema } from "../schemas";
import { useDataContext } from "../context/context.jsx";

const i_Values = {
  "First Name": "",
  "Last Name": "",
  Email: "",
  Age: "",
  DOB: "",
  Password: "",
  "Confirm Password": "",
  Aadhar: "",
  Address: "",
  City: "",
  "Pin Code": "",
  State: "",
};

const DynamicForm = () => {
  const [showPasssword, setShowPassword] = useState(false);

  const { data, setData } = useDataContext();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: i_Values,
      validationSchema: RegistrationSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        setData((prev) => [...prev, values]);
        action.resetForm();
      },
    });

  // console.log(Formik)
  return (
    <div className=" flex justify-center items-center mx-auto my-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
        <div className="flex  gap-3">
          <div className=" flex flex-col gap-1">
            <label className="text-sm font-semibold " htmlFor="f_name">
              First Name
            </label>
            <input
              className="w-full p-2 border-[1px] border-black outline-blue-500 rounded-md"
              id="name"
              name="First Name"
              type="text"
              placeholder="Enter First Name"
              value={values["First Name"]}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors["First Name"] && touched["First Name"] ? (
              <p className="text-sm text-red-500 font-semibold">
                {errors["First Name"]}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1 ">
            {" "}
            <label className="text-sm font-semibold" htmlFor="l_name">
              Last Name
            </label>
            <input
              className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
              id="l_name"
              name="Last Name"
              type="text"
              placeholder="Enter Last Name"
              value={values["Last Name"]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors["Last Name"] && touched["Last Name"] ? (
              <p className="text-sm text-red-500 font-semibold">
                {errors["Last Name"]}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          {" "}
          <label className="text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
            id="email"
            name="Email"
            type="email"
            placeholder="Enter Here"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Email && touched.Email ? (
            <p className="text-sm text-red-500 font-semibold">{errors.Email}</p>
          ) : null}
        </div>
        <div className="flex  gap-3">
          <div className="flex flex-col gap-1 ">
            {" "}
            <label className="text-sm font-semibold" htmlFor="age">
              Age
            </label>
            <input
              className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
              id="age"
              name="Age"
              type="number"
              placeholder="Enter Age"
              value={values.Age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Age && touched.Age ? (
              <p className="text-sm text-red-500 font-semibold">{errors.Age}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1 ">
            {" "}
            <label className="text-sm font-semibold" htmlFor="dob">
              Date Of Birth
            </label>
            <input
              className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
              id="dob"
              name="DOB"
              type="date"
              value={values.DOB}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.DOB && touched.DOB ? (
              <p className="text-sm text-red-500 font-semibold">{errors.DOB}</p>
            ) : null}
          </div>
        </div>
        <div className=" flex flex-col gap-1">
          {" "}
          <label className="text-sm font-semibold" htmlFor="password">
            Password
          </label>
          <div className="flex justify-center  items-center gap-2 pr-2">
            <input
              className="w-full p-2 rounded-md border-[1px]  border-black   outline-blue-400"
              id="password"
              name="Password"
              type={`${showPasssword ? "text" : "password"}`}
              placeholder="Enter Password"
              value={values.Password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }}
            >
              {showPasssword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
          {errors.Password && touched.Password ? (
            <p className="text-sm text-red-500 font-semibold">
              {errors.Password}
            </p>
          ) : null}
        </div>
        <div className=" flex flex-col gap-1">
          <label className="text-sm font-semibold" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            className="w-full p-2 rounded-md border-[1px]  border-black   outline-blue-400"
            id="confirm_password"
            name="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={values["Confirm Password"]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors["Confirm Password"] && touched["Confirm Password"] ? (
            <p className="text-sm text-red-500 font-semibold">
              {errors["Confirm Password"]}
            </p>
          ) : null}
        </div>
        <div className=" flex flex-col gap-1">
          {" "}
          <label className="text-sm font-semibold" htmlFor="aadhar">
            Aadhar Card
          </label>
          <input
            className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
            id="aadhar"
            name="Aadhar"
            type="number"
            placeholder="Enter Aadhar"
            value={values.Aadhar}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Aadhar && touched.Aadhar ? (
            <p className="text-sm text-red-500 font-semibold">
              {errors.Aadhar}
            </p>
          ) : null}
        </div>
        <div className=" flex flex-col gap-1">
          {" "}
          <label className="text-sm font-semibold" htmlFor="address">
            Address
          </label>
          <input
            className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
            id="address"
            name="Address"
            type="text"
            placeholder="Enter Address"
            value={values.Address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Address && touched.Address ? (
            <p className="text-sm text-red-500 font-semibold">
              {errors.Address}
            </p>
          ) : null}
        </div>
        <div className="flex  gap-3">
          <div className=" flex flex-col gap-1">
            {" "}
            <label className="text-sm font-semibold" htmlFor="city">
              City
            </label>
            <input
              className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
              id="city"
              name="City"
              type="text"
              placeholder="Enter City"
              value={values.City}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.City && touched.City ? (
              <p className="text-sm text-red-500 font-semibold">
                {errors.City}
              </p>
            ) : null}
          </div>
          <div className=" flex flex-col gap-1">
            {" "}
            <label className="text-sm font-semibold" htmlFor="pincode">
              Pin Code
            </label>
            <input
              className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
              id="pincode"
              name="Pin Code"
              type="number"
              placeholder="Enter Pincode"
              value={values["Pin Code"]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors["Pin Code"] && touched["Pin Code"] ? (
              <p className="text-sm text-red-500 font-semibold">
                {errors["Pin Code"]}
              </p>
            ) : null}
          </div>
        </div>

        <div className=" flex flex-col gap-1">
          <label className="text-sm font-semibold" htmlFor="state">
            State
          </label>
          <input
            className="w-full p-2 rounded-md border-[1px] border-black outline-blue-400"
            id="state"
            name="State"
            type="text"
            placeholder="Enter State"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.State && touched.State ? (
            <p className="text-sm text-red-500 font-semibold">{errors.State}</p>
          ) : null}
        </div>
        <button
          //   onClick={() => console.log("cli")}
          className="w-full p-2 text-lg bg-[#008CBA] text-white font-bold rounded-md"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
