import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ChatInfoI } from 'src/app/interfaces/chat-informations.interface';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {
  @Input() chatInfo: ChatInfoI

  constructor() { }
  
  //ngOnChanges(){} требуеться, на изминения статуса и названия чата

  ngOnInit() { }

}
