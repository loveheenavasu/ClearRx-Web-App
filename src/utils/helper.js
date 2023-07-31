export const validateMobileNumber = (number) => {
  // Regular expression to validate the mobile number (Assuming +91 followed by 10 digits)
  const mobileNumberRegex = /^[6-9]\d{9}$/;
  return mobileNumberRegex.test(number);
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const isAuthenticated = () => {
  const user = localStorage.getItem("token");
  return !!user; // Returns true if user exists in localStorage, otherwise false
};
