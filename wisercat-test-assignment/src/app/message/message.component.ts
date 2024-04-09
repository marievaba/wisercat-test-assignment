import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() text: string;
  @Input() type: string;
  messageHidden: boolean = false;

  constructor() {
    this.text = "";
    this.type = "info";
    this.messageHidden = false;
  }

  hideMessage() {
    this.messageHidden = true;
  }
}
