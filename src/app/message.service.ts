import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messageList = new Array<string>();

  constructor() {}

  public add(msg: string): void {
    this.messageList.push(msg);
  }
}
