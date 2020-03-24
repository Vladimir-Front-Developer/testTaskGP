import { Component, OnInit, Input } from '@angular/core';
import { MessageI } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: Array<MessageI>;

  constructor() { }

  ngOnInit() {
  }

}
