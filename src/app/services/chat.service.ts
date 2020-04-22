import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatInfoI } from '../interfaces/chat-informations.interface';
import { MessageI } from '../interfaces/message.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatsUrl = 'ws://web-socket-server.herokuapp.com/';

  public wsConnection$: Subject<any>
  public chatInfo$: Subject<ChatInfoI> = new Subject()
  public messages$: Subject<Array<MessageI>> = new Subject()

  constructor() {}

  initWSConnection(){
    this.wsConnection$ = webSocket(this.chatsUrl)
    return this.wsConnection$
  }

  joinChat(id: string): void {  
    let chatData = {
      chatId: id,
      userId: 'user_id',
      uptime: Math.floor(new Date().getTime() / 1000)
    }
    this.wsConnection$.next({ type: 'join', data: chatData })
  }

  getChatInformation(): Observable<any> {
    this.wsConnection$.pipe(
      map((data: ChatInfoI): ChatInfoI => {
        return {
          id: data.id,
          name: data.name,
          user: {
            connection: data.user.connection,
            statusText: data.user.statusText
          }
        }
      })
    ).subscribe(val => {
      this.chatInfo$.next(val)
    })
    return this.chatInfo$
  }

  getMessages(): Observable<any> {
    this.wsConnection$.pipe(
      map((data: ChatInfoI): Array<MessageI> => {
        return data.messages
      })
    ).subscribe(serverMessages => {
      this.messages$.next(serverMessages)
    })
    return this.messages$
  }

  sendMessage(msg: string): void {
    if(msg) {
      let msgData = {
        user: {
          id: UserService.userId,
          name: UserService.userName,
        },
        msg: msg,
        uptime: Math.floor(new Date().getTime() / 1000)
      }
      this.wsConnection$.next({ type: 'message', data: msgData })
    }
  }

}
