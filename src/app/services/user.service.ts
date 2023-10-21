import { StorageService } from './storage.service';
import { User } from './../interface/IUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/user/';
const API_AVATAR = 'https://ui-avatars.com/api/?';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.storageService.getUser().token,
    }),
  };
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'currentUser', { responseType: 'text' });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + 'save', user, this.httpOptions);
  }

  uploadAvatar(user: User): Observable<any> {
    return this.http.post(
      API_URL + 'uploadAvatar/' + user.id,
      user.avatar.avatar220,
      this.httpOptions
    );
  }
}
