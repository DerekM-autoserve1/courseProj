import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";

export interface AuthResponseData {
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string,
    registered?:boolean
}


@Injectable({providedIn:'root'})
export class AuthService{
    user = new Subject<User>();

    constructor(private http : HttpClient){}

    signUp(email:string, password:string){
        return this.http.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDa-Lej2Q9Kj-taykuKMahCwxwCr1v9_Pg',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        )
        .pipe(tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }

        ))
    }

    private handleAuthentication(email:string, userId:string, token:string, expiresIn:number){
        const expDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expDate);
        this.user.next(user);
    }

    login(email:string, password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDa-Lej2Q9Kj-taykuKMahCwxwCr1v9_Pg',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        )
        .pipe(tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }))
    }
}