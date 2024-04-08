import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() colors: string;

constructor() {
  this.text = "";
  this.type = "";
  this.colors = "";
}
}
