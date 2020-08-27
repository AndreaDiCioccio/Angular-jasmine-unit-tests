import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hero } from '../interfaces'
@Component({
    selector: 'app-dashboard-hero',
    template:``
})
export class DashboardHeroComponent{

  @Input() hero:Hero
  @Output() selected = new EventEmitter<Hero>()
  
  click(){
      this.selected.emit(this.hero)
  }

}
