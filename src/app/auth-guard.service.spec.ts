import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IAuthState } from './store/reducers/auth.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { TestColdObservable } from 'jasmine-marbles/src/test-observables';
import { cold } from 'jasmine-marbles';
import { Store } from '@ngrx/store';

describe('Auth guard', () => {

  let guard: AuthGuardService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let store: MockStore<{ auth: IAuthState }>;
  let routerSpy: jasmine.Spy;

  const initialState: { auth: IAuthState } = {auth: {isLogged: false}};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuardService, provideMockStore({initialState})]
    });

    guard = TestBed.get(AuthGuardService);
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    store = TestBed.get(Store);
    routerSpy = spyOn(router, 'navigate').and.stub();
  });
  it('should open login/signup when no token', () => {
    const expexted: TestColdObservable = cold('(a|)', {a: true});

    expect(guard.canActivate(activatedRoute.snapshot, {
      url: '/login',
      root: activatedRoute.snapshot
    })).toBeObservable(expexted);

    expect(guard.canActivate(activatedRoute.snapshot, {
      url: '/signup',
      root: activatedRoute.snapshot
    })).toBeObservable(expexted);
  });


  it('should redirect to login not backoffice', () => {
    const expexted: TestColdObservable = cold('(a|)', {a: false});

    expect(guard.canActivate(activatedRoute.snapshot, {
      url: '/backoffice',
      root: activatedRoute.snapshot
    })).toBeObservable(expexted);

    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should got to  backoffice', () => {
    store.setState({auth: {isLogged: true}});

    const expexted: TestColdObservable = cold('(a|)', {a: true});

    expect(guard.canActivate(activatedRoute.snapshot, {
      url: '/backoffice',
      root: activatedRoute.snapshot
    })).toBeObservable(expexted);

    expect(routerSpy).not.toHaveBeenCalled();
  });
});
