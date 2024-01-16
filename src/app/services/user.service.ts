import { StorageService } from './storage.service';
import { User } from './../interface/IUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  private apiURL: string = environment.API_URL;
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getUserBoard(): Observable<any> {
    return this.http.get(`${this.apiURL}/currentUser`, {
      responseType: 'text',
    });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiURL}/user/save`,
      user,
      this.httpOptions
    );
  }

  uploadAvatar(user: User): Observable<any> {
    return this.http.post(
      `${this.apiURL}/user/uploadAvatar/${user.id}`,
      user.avatar.avatar220,
      this.httpOptions
    );
  }

  listAll(): void {
    this.http
      .get<User[]>(`${this.apiURL}/user/listAll`, this.httpOptions)
      .subscribe((users) => {
        let usersTemp = this.usersSubject.getValue();
        usersTemp = usersTemp.concat(users);
        this.usersSubject.next(users);
      });
  }
}
