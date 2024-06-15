import * as Yup from "yup";

const calculateAge = (dob) => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export const RegistrationSchema = Yup.object({
  "First Name": Yup.string().min(2).required("Please Enter a valid Name"),
  "Last Name": Yup.string().min(2).required("Please Enter a valid Name"),
  Email: Yup.string().email().required("Please Enter a valid Email"),
  Age: Yup.number().min(0).integer().required("Enter a valid Age"),
  DOB: Yup.date()
    .required("Date of Birth is required")
    .test("is-valid-age", "Age does not match DOB", function (value) {
      const { Age } = this.parent; // Get the age value from the form
      if (!value || !Age) {
        return true; // Skip validation if either value is not provided yet
      }
      return calculateAge(value) === parseInt(Age); // Compare calculated age with provided age
    }),

  Password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  "Confirm Password": Yup.string()
    .oneOf([Yup.ref("Password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  Aadhar: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(12, "Number must be exactly 12 digits long")
    .required("This field is required"),
  Address: Yup.string().required("Enter Address"),
  City: Yup.string().min(2).required("Please Enter a valid City Name"),
  "Pin Code": Yup.string()
    .min(0, "Cannot be negative")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(6, "Length must be 6")
    .required("Enter a valid Pincode"),
  State: Yup.string().required("Please Enter a Valid State"),
});
