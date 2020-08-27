import { UserService } from './../services/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {

    // I added this code

    let comp: WelcomeComponent
    let userServiceMock: Partial<UserService>

    userServiceMock = {
        isLoggedIn:true,
        user:{id:123, name:'pippo', age:45}
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[WelcomeComponent,  {provide:UserService}]
        })

        let fixture =TestBed.createComponent(WelcomeComponent)
        comp = fixture.componentInstance
        userServiceMock = TestBed.inject(UserService)
    })

    it('should create', () => {
        expect(comp).toBeTruthy();
    });

    it('should not have welcome message after construction', () => {
        expect(comp.welcome).toBeUndefined()
    })

    it('should welcome logged in user after angular calls ngOnInit', () => {
        comp.ngOnInit()
        expect(comp.welcome).toContain(userServiceMock.user.name)
    })

    it('should ask user to log in if not logged in after ngOnInit', () => {
        userServiceMock.isLoggedIn = false
        comp.ngOnInit()
        expect(comp.welcome).not.toMatch(userServiceMock.user.name)
        expect(comp.welcome).toMatch('login')
    })
    
});
