import { ErrorsHandlerService } from './errors-handler.service';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService with testbed and without errorsServiceSpy', () => {
    //how to test service that depends by another service
    let userService: UserService;
    let errorsService: ErrorsHandlerService

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                UserService, { provide: ErrorsHandlerService }
              ]
        });

        userService = TestBed.inject(UserService);
        errorsService = TestBed.inject(ErrorsHandlerService)
    });

    it('should be created', () => {
        expect(userService).toBeTruthy();
    });

    it('should return user', () => {
        expect(userService.getUser).toBe(userService.user)
    })

    it('#getErrors should return #error value from a spy', () => {
        const error:string = 'prova errore';
        userService.generateError(error)
        expect(errorsService.getErrors.toString()).toContain(error)
    });

})

describe('test without testbed', () => {
    let userService: UserService
    let errorsService: ErrorsHandlerService

    it('should return error', () => {
        errorsService = new ErrorsHandlerService()
        userService = new UserService(errorsService)
        
        let error = 'prova errore'
        userService.generateError(error)
        expect(errorsService.getErrors.toString()).toContain(error)
    })

})