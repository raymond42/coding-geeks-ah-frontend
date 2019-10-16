import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../../../app/common/config/appConfig';
import {
  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_SUCCESS
} from '../constants';

const token = localStorage.getItem('token');

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};
export const likeArticle = slug => async dispatch => {
  try {
    const { data } = await axios.put(
      `${BACKEND_URL}/articles/${slug}/like`,
      {},
      axiosConfig
    );
    const res = await axios.get(`${BACKEND_URL}/articles/${slug}`);

    dispatch({
      type: LIKE_ARTICLE_SUCCESS,
      payload: res.data
    });
    toast.success(data.message, { position: toast.POSITION.TOP_CENTER });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: LIKE_ARTICLE_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};

export const dislikeArticle = slug => async dispatch => {
  try {
    const { data } = await axios.put(
      `${BACKEND_URL}/articles/${slug}/dislike`,
      {},
      axiosConfig
    );
    const res = await axios.get(`${BACKEND_URL}/articles/${slug}`);
    toast.success(data.message, { position: toast.POSITION.TOP_CENTER });

    dispatch({
      type: DISLIKE_ARTICLE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: DISLIKE_ARTICLE_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};
