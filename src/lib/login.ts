import { signIn } from "next-auth/react";

export const login = async (email: string, password: string) => {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false, // Handle the redirect manually after checking the response
    });

    if (response?.error) {
      return { message: "Invalid Credentials", type: "error" };
    }

    // If the login was successful, redirect manually
    window.location.href = '/dashboard';

    return { message: "Login success", type: "success" };
  } catch (e) {
    console.error(e);
    return { message: "An error occurred during login", type: "error" };
  }
};
