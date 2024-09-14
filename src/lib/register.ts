import axios from "axios";
import { config } from "@/config";

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${config.api_url}/register`, {
      email,
      password,
    });

    if (response.data.success) {
      return { message: "Registration successful", type: "success" };
    } else {
      return { message: response.data.message, type: "error" };
    }
  } catch (e) {
    console.error(e);
    return { message: "An error occurred during registration", type: "error" };
  }
};
