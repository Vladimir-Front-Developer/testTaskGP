import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ChatWindowComponent } from './chat-window.component';
import { ChatHeaderComponent } from '../components/chat-header/chat-header.component';
import { MessageInputFieldComponent } from '../components/message-input-field/message-input-field.component';
import { MessageListComponent } from '../components/message-list/message-list.component';
import { MessageComponent } from '../components/message/message.component';


@NgModule({
  declarations: [
    ChatWindowComponent,
    ChatHeaderComponent,
    MessageListComponent,
    MessageComponent,
    MessageInputFieldComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [ChatWindowComponent]
})
export class ChatWindowModule { }
