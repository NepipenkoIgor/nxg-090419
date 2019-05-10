import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export const baseUrl: string = environment.baseUrl;
export const BASE_URL_TOKEN: InjectionToken<string> = new InjectionToken(baseUrl);
