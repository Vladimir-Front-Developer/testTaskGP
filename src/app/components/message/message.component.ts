import { Component, OnInit, Input } from '@angular/core';
import { MessageI } from 'src/app/interfaces/message.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: MessageI
  isMyMessages: boolean

  constructor() { }

  ngOnInit() {
    this.isMyMessages = (this.msg.user.id !== UserService.userId)
  }

}
