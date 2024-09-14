import axios from "axios";

interface CreateUserLabParams {
  token: string;
}

export const getActiveLabs = async ({ token }: CreateUserLabParams) => {
  try {
    const response = await axios.get(
      "https://avidia-backend.app.k8s.coffeecodes.in/v1/labs/userGet",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch active labs:", error);
    throw error;
  }
};
