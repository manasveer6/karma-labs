// import axios from "axios";

// export const getUserLabs = async (token: string, userId: string) => {
//   try {
//     const response = await axios.get(`https://avidia-backend.app.k8s.coffeecodes.in/v1/labs/user/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user labs", error);
//     throw new Error("Error fetching user labs");
//   }
// };


//temp user

import axios from "axios";

export const getUserLabs = async (token: string) => {
  try {
    // Retrieve userId from localStorage or session if that's how you are storing it
    const userId = localStorage.getItem("userId"); // Adjust based on your storage mechanism
    if (!userId) {
      throw new Error("User ID is missing");
    }

    const response = await axios.get(`https://avidia-backend.app.k8s.coffeecodes.in/v1/labs/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user labs", error);
    throw new Error("Error fetching user labs");
  }
};
