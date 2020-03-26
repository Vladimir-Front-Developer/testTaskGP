import { HostListener, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-message-input-field',
  templateUrl: './message-input-field.component.html',
  styleUrls: ['./message-input-field.component.scss']
})
export class MessageInputFieldComponent {
  entryFieldMessages = new FormControl('')
  
  constructor(public chatS: ChatService) { }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.keyCode === 18) this.sendMessage()
  }

  sendMessage(){
    this.chatS.sendMessage(this.entryFieldMessages.value)
    this.entryFieldMessages.setValue('')
  }
}
