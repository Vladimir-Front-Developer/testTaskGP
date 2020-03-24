import { Component, OnInit, OnDestroy } from '@angular/core';
import { JoinChatService } from '../services/join-chat.service';
import { ChatInfoI } from '../interfaces/chat-informations.interface';
import { MessageI } from '../interfaces/message.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {
  chatId: string = 'chat_test'
  chatInfo: ChatInfoI
  messages: Array<MessageI>
  subscribeChat: Subscription

  constructor(public joinChatS: JoinChatService) {}

  ngOnInit() {
    this.subscribeChat = this.joinChatS.getChatHistory(this.chatId).subscribe(chatHistory => {
      this.chatInfo = {
        id: chatHistory.id,
        name: chatHistory.name,
        user: {
          connection: chatHistory.user.connection,
          statusText: chatHistory.user.statusText
        }
      }
      this.messages = chatHistory.messages
      console.log('chatInfo:', this.chatInfo)
      console.log('messages:', this.messages)
    })
  }

  ngOnDestroy(): void {
    this.subscribeChat.unsubscribe()
  }

}
