import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private $http: HttpClient) { }

  private _readResponse(response: any): object {
    if (typeof response === 'object' && 'Result' in response) {
      return response.Result;
    }
    return response;
  }

  private _handleError(error: any) {
    if (
      !error.status ||
      error.status === 401 ||
      error.status === 302 ||
      error.status === 10 ||
      error.status === 403 ||
      error.status === 400
    ) {
    }
    const message: string = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : 'Server error';
    return of({
      errorResponse: error,
    });
  }

  public getBonus() {
    return this.$http.get(`${environment.baseUrl}/getavmcardsinfo`);
  }
  public getDashboardCardsDetails() {
    const headers = { 'content-type': 'application/json' };
    return this.$http.get(`${environment.baseUrl}/getavmcardsinfo`).
      pipe(map(this._readResponse), catchError(this._handleError));
  }
}