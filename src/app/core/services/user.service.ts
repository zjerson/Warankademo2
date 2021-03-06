import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { User } from '@app/core/models';
import { Recommended } from '@app/core/models/model.recommended';

@Injectable({
    providedIn: 'root'
})
export class UserService {



    constructor(private apiService: ApiService) { }

    register(user: User): Observable<User> {
        return this.apiService.post('/user', user);
    }

    login(credentials: Object): Observable<Object> {
        return of({
            usuario: {
                nombres: 'Jerson Victor',
                apellidos: 'Estacio Garcia',
                id: 55555
            },
            token: 'ABCDEF',
        })
        // return this.apiService.post('/user/auth', credentials);
    }



    getCurrentUser(): Observable<Recommended> {
        return this.apiService.post('/user/access');
    }
    getUser(phone): Observable<Recommended> {
        return this.apiService.get(`/user?telefono=${phone}`);
    }


}
