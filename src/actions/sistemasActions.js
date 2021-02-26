import axios from '../utils/axios';

export const GET_ALL_SYSTEMS = '@sistemas/GET_SISTEMAS';

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

export { getAllSystems };
