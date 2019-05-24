import { AuthActions, AuthActionsType } from '../actions/auth.actions';

export interface IAuthState {
  isLogged: boolean;
}

export const initialState: IAuthState = {
  isLogged: false
};

export function authReducer(state: IAuthState = initialLoggedState(), action: AuthActionsType): IAuthState {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return {...state, isLogged: true};
    }
    case AuthActions.SIGNUP_SUCCESS: {
      return {...state, isLogged: true};
    }
    case AuthActions.LOGOUT_SUCESSS: {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
}

function initialLoggedState(): IAuthState {
  try {
    const token: string = localStorage.getItem('accessToken') as string;
    return {
      ...initialState,
      isLogged: token ? true : false
    };
  } catch (err) {
    localStorage.removeItem('accessToken');
    return initialState;
  }
}
