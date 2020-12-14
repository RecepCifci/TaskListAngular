import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class ServiceBase {

    constructor() { }

    servicePath: string = "http://localhost:3000/";

    handleError(err: HttpErrorResponse) {
        let errorMessage = ''
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'Bir hata oluştu ' + err.error.message
        }
        else {
            errorMessage = 'Sistemsel bir hata'
        }
        return throwError(errorMessage);
    }
} 