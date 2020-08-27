import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ErrorsHandlerService {

    errors:string[] = []

    addError(error:string):void{
        this.errors.push(error)
    }

    get getErrors():string[]{
        return this.errors
    }
}
