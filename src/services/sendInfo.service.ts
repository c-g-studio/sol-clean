import axios from 'axios';

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

interface CallbackData {
  name?: string;
  email?: string;
  phone?: string;
}

const callBack = async (data: CallbackData) => {
  try {
    await axios.post(`${NEXT_PUBLIC_SERVER_URL}/api/callback-infos`, {
      data: data
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const callBackService = {
  callBack
};
