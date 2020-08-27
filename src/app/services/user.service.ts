import { ErrorsHandlerService } from './errors-handler.service';
import { Injectable } from '@angular/core';
import { User } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
/* this is a mock service, in a real situation this would be a service with asynchronous calls and so you will need to define a mock service for testing */

export class UserService {

    constructor( private errorsService:ErrorsHandlerService ){}

    user:User = {id:123, name:'pippo', age:45}
    isLoggedIn:boolean = true

    login():void{
        this.isLoggedIn = true
    }

    logout():void{
        this.isLoggedIn = false
    }

    get getUser():User{
        return this.user
    }

    generateError(error:string):void{
        this.errorsService.addError(error)
    }
}
