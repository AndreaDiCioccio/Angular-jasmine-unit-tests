import { UserService } from './../services/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
    // autogenerted code
/*     
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
 
    // FROM DOCUMENTATION:
    // You can ignore this section if you only run tests with the CLI ng test command because the CLI compiles //// the application before running the tests.
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WelcomeComponent ]
        }).compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
*/
    // I added this code
    let comp
    let userService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[WelcomeComponent,{provide:UserService, useClass:UserService}]
        })
        comp = TestBed.inject(WelcomeComponent)
        userService = TestBed.inject(UserService)
    })

    it('should create', () => {
        expect(comp).toBeTruthy();
    });

    it('should not have welcome message after construction', () => {
        expect(comp.welcome).toBeUndefined()
    })

    it('should welcome logged in user after angular calls ngOnInit', () => {
        comp.ngOnInit()
        expect(comp.welcome).toContain(userService.user.name)
    })

    it('should ask user to log in if not logged in after ngOnInit'), () => {
        userService.logout
        comp.ngOnInit()
        expect(comp.welcome).not.toContain(userService.user.name)
        expect(comp.welcome).toContain('log in')
    }
    
});
