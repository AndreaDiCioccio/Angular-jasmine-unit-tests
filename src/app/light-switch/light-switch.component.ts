import { Component } from '@angular/core';

@Component({
    selector: 'app-light-switch',
    template: `
        <p>{{message}}</p>
        <button (click)="switchLight()">Switch Light</button>
    `
})
export class LightSwitchComponent{

    isOn:boolean = false
    
    get message():string{
        return `The light is ${this.isOn ? 'on' : 'off'}`
    }

    switchLight(){ 
        this.isOn = !this.isOn
    }

}
