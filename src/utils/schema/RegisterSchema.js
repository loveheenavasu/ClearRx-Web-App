import * as yup from "yup";
export const RegisterSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .matches(/^[A-Za-z\s\-]+$/, "Invalid characters in name"),
  LicenseNumber: yup.string().required("Doctor license number is required"),
  deegree: yup.string().required("Degree is required"),
  location: yup.string(),
  uploadCertificate: yup.mixed().required("Certificate upload is required"),
});
