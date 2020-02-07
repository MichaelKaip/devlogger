import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


import * as Log from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

logs: Log.Log[]

private logSource = new BehaviorSubject<Log.Log>({id: null, text: null, date: null})
selectedLog = this.logSource.asObservable();

private stateSource = new BehaviorSubject<boolean>(true)
stateClear = this.stateSource.asObservable()

  constructor() { 
    //this.logs = [
      //{id: '1', text: 'Generated Components', date: new Date('02/04/2020 21:24:33')}, 
     //{id: '2', text: 'Added Bootstrap', date: new Date('02/05/2020 14:22:48')}, 
      //{id: '3', text: 'Added something magic', date: new Date('02/05/2020 18:36:00')}
    //]
    this.logs = []
  }

  getLogs(): Observable<Log.Log[]>{
    return of(this.logs)
  }

  setFormLog(log: Log.Log){
    this.logSource.next(log);
  }

  addLog(log: Log.Log) {
    this.logs.unshift(log)
  }

  updateLog(log: Log.Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id) {
        this.logs.splice(index, 1)
      }
    })
    this.logs.unshift(log)
  }

  deleteLog(log: Log.Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id) {
        this.logs.splice(index, 1)
      }
    })
  }

  clearState() {
    this.stateSource.next(true)
  }

}
