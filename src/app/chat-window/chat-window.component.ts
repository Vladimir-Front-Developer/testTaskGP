import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {
  chatId: string = 'chat_test'
  subscribeChat: Subscription

  constructor(public chatS: ChatService) {}

  ngOnInit() {
    this.subscribeChat = this.chatS.initWSConnection().subscribe()
    this.chatS.joinChat(this.chatId)
  }

  ngOnDestroy(){
    this.subscribeChat.unsubscribe()
  }

}
