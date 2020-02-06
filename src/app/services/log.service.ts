import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

logs: Log[]

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('02/04/2020 21:24:33')}, 
      {id: '2', text: 'Added Bootstrap', date: new Date('02/05/2020 14:22:48')}, 
      {id: '3', text: 'Added something magic', date: new Date('02/05/2020 18:36:00')}
    ]
  }

  getLogs(){
    return this.logs;
  }
}
