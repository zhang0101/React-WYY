/**
 * reducer
 */

import { initialState, StateType } from "../index";
import { Type, ModifyAction } from "../action";
export default (state = initialState, action: ModifyAction): StateType => {
  switch (action.type) {
    case Type.SWITCH_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case Type.LOADING:
      return {
        ...state,
        loading: state.loading + action.loading,
      };
    default:
      return { ...state };
  }
};
