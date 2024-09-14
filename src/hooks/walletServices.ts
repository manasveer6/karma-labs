import axios from 'axios';

export const topUpWallet = async (token: string, amount: number, redirectUrl: string) => {
  try {
    const response = await axios.post(
      'https://avidia-backend.app.k8s.coffeecodes.in/v1/wallet/topup',
      { coins: amount, redirect_url: redirectUrl },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
