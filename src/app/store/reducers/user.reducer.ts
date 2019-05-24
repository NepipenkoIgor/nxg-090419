import { UserActions, UserActionsType } from '../actions/user.actions';

export type IAdress = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export interface IUser {
  name: string;
  surname: string;
  accessToken: string;
  createdAt: Date;
  email: string;
  username: string;
  _id: string;
  adress?: IAdress[];
  gender: boolean;
}

export const initialState: IUser = {
  name: '',
  surname: '',
  accessToken: '',
  createdAt: new Date(),
  email: '',
  username: '',
  _id: '',
  adress: [],
  gender: false,
};


export function userReducer(state: IUser = initialState, action: UserActionsType): IUser {
  switch (action.type) {
    case UserActions.SET_USER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}
