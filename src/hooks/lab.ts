import axios from 'axios';

const API_URL = 'https://avidia-backend.app.k8s.coffeecodes.in/v1/labs';

export const getAllLabs = async (token: string) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching labs:', error);
    throw new Error('Failed to fetch labs');
  }
};
