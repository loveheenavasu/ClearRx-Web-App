import { router } from "App";
import { AXIOS } from "utils/axios";
import { toast } from "react-toastify";
import { store } from "redux-store/store";
import { setLoading } from "redux-store/slices/loading";

class AuthService {
  async confirmOtp(mobileNumber, otp) {
    try {
      store.dispatch(setLoading(["GET_USER", true]));
      const response = await AXIOS.post("/verify-otp", {
        mobile_number: mobileNumber,
        otp: Number(otp),
      });

      if (response?.data?.statusCode === 200) {
        const userData = response?.data?.body?.user || {};
        localStorage.setItem("userData", JSON.stringify(userData));
        if (!response?.data?.body?.userExits) {
          router.navigate(`/register?phone=${mobileNumber}`);
          return;
        }
        if (
          response?.data?.body?.userExits &&
          response?.data?.body?.accountVerified
        ) {
          localStorage.setItem("token", response?.data?.body?.token);
          router.navigate("/home");
        } else {
          if (!response.data.body.userExits) {
            console.log(response?.data, "asdfjasljdljlsdafdasljlj");

            router.navigate(`/register?phone=${mobileNumber}`);
          }
          if (!response?.data?.body?.accountVerified) {
            router.navigate("/login");
          }
        }
        toast.success(response?.data?.body?.message);
      }
      if (response?.data?.statusCode === 404) {
        toast.error("you enter wrong otp");
      }
    } catch (error) {
      console.log("please enter a valid input");
    } finally {
      store.dispatch(setLoading(["GET_USER", false]));
    }
  }

  async sendOtp(mobileNumber) {
    try {
      store.dispatch(setLoading(["GET_USER", true]));

      const response = await AXIOS.post("/login", {
        mobile_number: mobileNumber,
      });

      if (response?.data?.statusCode === 200) {
        toast.success(response.data.body.message);
        router.navigate(`/confirm-otp?phone=${mobileNumber}`);
      }
    } catch (error) {
      console.log("Error while sending OTP:", error.message);
    } finally {
      store.dispatch(setLoading(["GET_USER", false]));
    }
  }

  async register(values, phoneNumber) {
    try {
      store.dispatch(setLoading(["GET_USER", true]));

      const { LicenseNumber, deegree, fullName, location, uploadCertificate } =
        values || {};
      const data = {
        mobile_number: phoneNumber,
        full_name: fullName,
        licence_number: LicenseNumber,
        degree_speciality: deegree,
        practice_location: location,
        imageArr: uploadCertificate,
      };
      const response = await AXIOS.post("/register", data);

      console.log(response?.data?.body.user, "asdfsalhfasdhfsajflsdajofj");
      if (response?.data?.statusCode === 200) {
        localStorage.setItem(
          "userData",
          JSON.stringify(response?.data?.body?.user)
        );
        router.navigate("/thanks");
        console.log("good");
        toast.success(response?.data?.body.message);
        return;
      }
    } catch (error) {
      //
    } finally {
      store.dispatch(setLoading(["GET_USER", false]));
    }
  }
  async approveUser(data) {
    try {
      const response = await AXIOS.post("/approve-user", data);
      console.log(response, "thisisresponse");
    } catch (error) {}
  }
}

export default new AuthService();
