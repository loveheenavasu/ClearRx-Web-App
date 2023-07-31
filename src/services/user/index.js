import { AXIOS } from "utils/axios";
import { store } from "redux-store/store";
import { getUser } from "redux-store/slices/user";
import { setLoading } from "redux-store/slices/loading";
import { toast } from "react-toastify";

class UserService {
  async editProfile(values, id) {
    try {
      store.dispatch(setLoading(["GET_USER", true]));

      console.log(id, "Asdfasdfadsf");

      const { LicenseNumber, deegree, fullName, location } = values;
      const config = {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      };
      const response = await AXIOS.post(
        "/edit-user",
        {
          id: id,
          full_name: fullName,
          licence_number: LicenseNumber,
          degree_speciality: deegree,
          practice_location: location,
        },
        config
      );
      if (response.status === 200) {
        toast.success(response?.data?.message);
      }
      // if(response.)

      console.log(response, "thisisourreso");
    } catch (error) {
      // Handle error
    } finally {
      store.dispatch(setLoading(["GET_USER", false]));
    }
  }

  async getUser(id) {
    console.log(id, "this is my id");
    try {
      store.dispatch(setLoading(["PAGE_LOADING", true]));
      const config = {
        headers: {
          Authorization: `${localStorage.getItem("token")}`, // Include the token in the Authorization header
        },
      };
      const response = await AXIOS.get(`/view-user?id=${id}`, config);
      console.log(response, "asdfjlasldfjlsadjf");
      if (response?.data?.statusCode === 200) {
        store.dispatch(getUser(response?.data?.body?.user));
      }
    } catch (error) {
    } finally {
      store.dispatch(setLoading(["PAGE_LOADING", false]));
    }
  }
}

export default new UserService();
