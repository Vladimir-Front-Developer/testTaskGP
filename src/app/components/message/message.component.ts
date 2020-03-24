import { Component, OnInit, Input } from '@angular/core';
import { MessageI } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: MessageI;
  
  constructor() { }

  ngOnInit() {
  }

}
