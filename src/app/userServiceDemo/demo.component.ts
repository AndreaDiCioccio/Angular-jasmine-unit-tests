import { ErrorsHandlerService } from './../services/errors-handler.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
    selector: 'app-demo',
    template:`<p>Demo works!</p>`
})

export class DemoComponent implements OnInit {

    constructor(private userService:UserService, private ErrorsService:ErrorsHandlerService) { }

    ngOnInit(): void {
        this.userService.generateError('prova errore')
        let errore = this.ErrorsService.getErrors
        console.log('errore', errore)
    }

}
