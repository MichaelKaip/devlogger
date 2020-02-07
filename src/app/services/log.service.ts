import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

logs: Log[]

private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null})
selectedLog = this.logSource.asObservable();

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('02/04/2020 21:24:33')}, 
      {id: '2', text: 'Added Bootstrap', date: new Date('02/05/2020 14:22:48')}, 
      {id: '3', text: 'Added something magic', date: new Date('02/05/2020 18:36:00')}
    ]
  }

  getLogs(): Observable<Log[]>{
    return of(this.logs)
  }

  setFormLog(log: Log){
    this.logSource.next(log);
  }



}
