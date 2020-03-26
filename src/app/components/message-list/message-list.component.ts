import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageI } from 'src/app/interfaces/message.interface';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, OnDestroy {
  messages: Array<MessageI>
  subscribeMsgs: Subscription
  container: HTMLElement
  scrollHeight: number

  constructor(public chatS: ChatService) { }

  ngOnInit() {
    this.subscribeMsgs = this.chatS.getMessages().subscribe(val => {
      this.messages = val
      this.scrollHeight = this.container.scrollHeight
    })
  }

  ngAfterViewInit() {
    this.container = document.getElementById("msgContainer")
  }

  ngOnDestroy(): void {
    this.subscribeMsgs.unsubscribe()
  }

}
