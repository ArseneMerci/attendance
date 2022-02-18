import axios from 'axios';
import cogoToast from 'cogo-toast'


const httpRequest = async (method, url, data = null,headers=null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return { response };
  } catch (error) {
    const errorMessage = (error.response) ? error.response.data.message.error || error.response.data.message : 'Failed Try again later';
    cogoToast.error(errorMessage, {position: "top-right"});
    return { error };
  }
};

export { httpRequest };