import { authReducer, IAuthState } from './auth.reducer';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthActions, AuthActionsType } from '../actions/auth.actions';
import { RouterStateSerializer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, NavigationExtras, Params, RouterStateSnapshot } from '@angular/router';
import { IUser, userReducer } from './user.reducer';

export interface IRootStore {
  auth: IAuthState;
  user: IUser;
  router: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducer: ActionReducerMap<IRootStore> = {
  auth: authReducer,
  user: userReducer,
  router: fromRouter.routerReducer
};

export function logoutAndClearState(r: ActionReducer<IRootStore>): ActionReducer<IRootStore> {
  return (state: IRootStore, action: AuthActionsType): IRootStore => {
    switch (action.type) {
      case AuthActions.LOGOUT_SUCESSS: {
        state = undefined;
      }
    }
    return r(state, action);
  };
}

export const metaReducers: MetaReducer<IRootStore>[] = [logoutAndClearState];

export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface IRouterPayload {
  path: any[];
  query?: any;
  extras?: NavigationExtras;
}

export class CustomRouterSerializer implements RouterStateSerializer<IRouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const {
      url,
      root: {queryParams}
    } = routerState;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {params} = state;
    return {url, queryParams, params};
  }
}
