import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string,
}

@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http : HttpClient){}

    signUp(email:string, password:string){
        return this.http.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDa-Lej2Q9Kj-taykuKMahCwxwCr1v9_Pg',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        );
    }
}