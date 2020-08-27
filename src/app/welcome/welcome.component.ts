import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
    selector: 'app-welcome',
    template:``
})
export class WelcomeComponent implements OnInit {

    welcome:string

    constructor(private userService:UserService) { }

    ngOnInit(): void {
        this.welcome = this.userService.isLoggedIn ? 'welcome' + this.userService.user.name : 'please login'
    }

}
