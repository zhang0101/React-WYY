import { Dispatch } from "react";
export enum Type {
  SWITCH_MENU = "[SWITCH_MENU]",
  LOADING = "[LOADING]",
}

export interface switchMenuAction {
  readonly type: Type.SWITCH_MENU;
}

export interface loadingAction {
  readonly type: Type.LOADING;
  readonly loading: number;
}

const switchMenu = (): switchMenuAction => ({
  type: Type.SWITCH_MENU,
});

export const loading = (loading: number): loadingAction => ({
  type: Type.LOADING,
  loading,
});

export const loadingFn = (dispatch: Dispatch<any>) => ({
  loadingFnc: (load: number) => {
    return dispatch(loading(load));
  },
});

export const switchMenuFn = (dispatch: Dispatch<any>) => ({
  switchMenuFnc: () => {
    return dispatch(switchMenu());
  },
});

export type ModifyAction = switchMenuAction | loadingAction;
