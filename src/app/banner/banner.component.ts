import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    template: `
        <p class="message">{{message}}</p>
    `
})

export class BannerComponent {

    message:string = "banner works!"
  
}
