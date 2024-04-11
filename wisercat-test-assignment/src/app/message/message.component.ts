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
  @Input() handleClose: () => void = () => {};

  constructor() {
    this.text = "";
    this.type = "info";
  }

  hideMessage() {
    console.log("asdasd")
    this.handleClose();
  }
}
