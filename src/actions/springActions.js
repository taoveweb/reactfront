import * as types from '../constants/actionTypes';

//首次获取列表
export function initSharePage(data) {
  //dispatch end fetch action
  return {
    type: types.initPage,
    data:data
  };

}
