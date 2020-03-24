import { Injectable } from '@angular/core';

export interface ChatInfoI {
  id: string,
  name: string,
  user: {
    connection: boolean,
    statusText: string
  }
}

export interface MessageI {
  user: {
    id: string,
    name: string,
    img: string
  },
  msg: string,
  uptime: number
}

@Injectable({
  providedIn: 'root'
})
export class JoinChatService {
  private chatId: string
  public information: ChatInfoI
  public messages: Array<MessageI>
  constructor(chatId) {
    // this.information = this.getChatInformations(chatId)
  }

  getChatInformations(id: string): ChatInfoI {
    
  }

  getMessages() {

  }

  sendMessage() {

  }

}
