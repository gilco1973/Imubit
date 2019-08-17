import { Injectable } from '@angular/core';
import { Position } from './position';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }
  checkIfKnightMoveAllowed(originalPosition: Position, targetPosition: Position): Promise<any> {
    const data: any = {};
    data.originalPosition = originalPosition;
    data.targetPosition = targetPosition;
    return this.http.post('/checkMove', data).toPromise();
  }
}
