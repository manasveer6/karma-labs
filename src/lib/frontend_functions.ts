import axios from "axios";
import { config } from "@/config";
import { signIn } from "next-auth/react";
import { userLab } from "@/types";

export const login = async (email: string, password: string) => {
  try {
    signIn("credentials", { email, password });
    return { message: "success", type: "success" };
  } catch {
    return { message: "Invalid Credentials", type: "error" };
  }
};

export const createUserLab = async (userData: userLab, jwt: string) => {
  try {
    const res = await axios.post(
      `${config.api_url}/${config.v}/labs/user/create`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return {
      message: "Lab created",
      type: "success",
      data: res.data,
    };
  } catch (err) {
    return {
      message: "Error creating lab",
      type: "error",
      data: err,
    };
  }
};

export const getLabs = async (jwt: string) => {
  try {
    const res = await axios.get(`${config.api_url}/${config.v}/labs`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return {
      message: "Labs fetched",
      type: "success",
      data: res.data,
    };
  } catch (err) {
    return {
      message: "Error fetching labs",
      type: "error",
      data: err,
    };
  }
};

export const getLabById = async (labId: string, jwt: string) => {
  try {
    const res = await axios.get(`${config.api_url}/${config.v}/lab/${labId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return {
      message: "Lab fetched",
      type: "success",
      data: res.data,
    };
  } catch (err) {
    return {
      message: "Error fetching lab",
      type: "error",
      data: err,
    };
  }
};

export const getLabByUserLabId = async (userLabId: string, jwt: string) => {
  try {
    const res = await axios.get(
      `${config.api_url}/${config.v}/labs/user/${userLabId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return {
      message: "Lab fetched",
      type: "success",
      data: res.data,
    };
  } catch (err) {
    return {
      message: "Error fetching lab",
      type: "error",
      data: err,
    };
  }
};

export const deleteLab = async (userLabId: string, jwt: string) => {
  try {
    const res = await axios.delete(
      `${config.api_url}/${config.v}/labs/user/${userLabId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return {
      message: "Lab deleted",
      type: "success",
      data: res.data,
    };
  } catch (err) {
    return {
      message: "Error deleting lab",
      type: "error",
      data: err,
    };
  }
};
