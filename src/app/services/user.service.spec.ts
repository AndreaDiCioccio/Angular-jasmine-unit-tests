import { ErrorsHandlerService } from './errors-handler.service';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService with errorsServiceSpy and testbed', () => {
    //how to test service that depends by another service
    let userService: UserService;
    let errorsServiceSpy: jasmine.SpyObj<ErrorsHandlerService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ErrorsHandleService', ['getErrors', 'addError']);

        TestBed.configureTestingModule({
            providers: [
                UserService, { provide: ErrorsHandlerService, useValue: spy }
              ]
        });

        userService = TestBed.inject(UserService);
        errorsServiceSpy = TestBed.inject(ErrorsHandlerService) as jasmine.SpyObj<ErrorsHandlerService>;
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
        let errors:string = errorsServiceSpy.getErrors.toString()
        console.log('errors', errors)
        expect(errorsServiceSpy.getErrors.toString()).toContain(error)
    });

})

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
        let errors:string = errorsService.getErrors.toString()
        console.log('errors', errors)
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
        let errors = errorsService.getErrors.toString()
        console.log('errors', errors)
        expect(errorsService.getErrors.toString()).toContain(error)
    })
})