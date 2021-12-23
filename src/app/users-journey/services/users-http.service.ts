import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BASE_URL, USERS_ENDPOINT } from '../constants/users.constants';
import { User } from '../interfaces/users.interface';

@Injectable()
export class UsersHttpService {
  users$ = this.http.get<User[]>(`${BASE_URL}/${USERS_ENDPOINT}`).pipe(delay(2000));

  constructor(private readonly http: HttpClient) { }
}
