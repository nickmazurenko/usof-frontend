import * as Users from '../../api/users';
import * as Types from './types';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await Users.usersData();
    dispatch({
      type: Types.GET_USERS,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: Types.USERS_ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getUserId = (id) => async (dispatch) => {
  try {
    const response = await Users.userIdData(id);
    dispatch({
      type: Types.GET_USER_ID,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: Types.USERS_ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const createUser = (data) => async (dispatch) => {
  try {
    const response = await Users.createUser(data);
    dispatch({
      type: Types.POST_USER,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: Types.USERS_ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const updateAvatar = (data) => async (dispatch) => {
  try {
    const response = await Users.updateAvatar(data);
    dispatch({
      type: Types.PATCH_AVATAR,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: Types.USERS_ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const updateUser = (data, id) => async (dispatch) => {
  try {
    const response = await Users.updateUser(data, id);
    dispatch({
      type: Types.PATCH_USER,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: Types.USERS_ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await Users.deleteUser(id);
    dispatch({
      type: Types.DELETE_USER,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: Types.USERS_ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};