import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, USERS_ENDPOINT } from '../constants/users.constants';
import { User } from '../interfaces/users.interface';

@Injectable()
export class UsersHttpService {
  users$ = this.http.get<User[]>(`${BASE_URL}/${USERS_ENDPOINT}`);

  constructor(private readonly http: HttpClient) { }
}
