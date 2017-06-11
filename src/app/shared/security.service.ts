import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SecurityService {
  private state = new BehaviorSubject<string>("initial");
  state$ = this.state.asObservable();

  constructor() {    
    console.log("***SecurityService - initialized...");
  }

  setState(newState: string) {
    this.state.next(newState);
  }
}
