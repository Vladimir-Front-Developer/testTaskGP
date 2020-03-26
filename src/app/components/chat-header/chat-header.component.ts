import { Component, OnInit, OnDestroy} from '@angular/core';
import { ChatInfoI } from 'src/app/interfaces/chat-informations.interface';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit, OnDestroy {
  chatInfo: ChatInfoI
  subscribeChatInfo: Subscription

  constructor(public chatS: ChatService) { }

  ngOnInit() {
    this.subscribeChatInfo = this.chatS.getChatInformation().subscribe(val => {
      this.chatInfo = val
    })
  }

  ngOnDestroy(): void {
    this.subscribeChatInfo.unsubscribe()
  }

}
