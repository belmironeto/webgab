import axios from '../utils/axios';

export const GET_ALL_SYSTEMS = '@sistemas/GET_SISTEMAS';
export const GET_SYSTEM_BY_TAG = '@sistemas/GET_SISTEMAS_BY_TAG';

const getSystemsByTAG = (tag) => {
  return async (dispatch) => {
    const sistemas = await axios.get(`/api/sistemas/tag/${tag}`);

    dispatch({
      type: GET_SYSTEM_BY_TAG,
      payload: {
        sistemas: sistemas.data,
      },
    });
  };
};

const getAllSystems = () => {
  return async (dispatch) => {
    const sistemas = await axios.get('/api/sistemas');

    dispatch({
      type: GET_ALL_SYSTEMS,
      payload: {
        sistemas: sistemas.data,
      },
    });
  };
};

export { getAllSystems, getSystemsByTAG };
