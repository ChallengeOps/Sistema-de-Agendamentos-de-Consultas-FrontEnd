import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  imports: [],
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.css'
})
export class ModalInfoComponent {
  @Input() item: any;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

}
