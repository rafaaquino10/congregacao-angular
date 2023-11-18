import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmacao-modal',
  templateUrl: './confirmacao-modal.component.html',
  styleUrls: ['./confirmacao-modal.component.scss']
})
export class ConfirmacaoModalComponent {
  @Input() title: string = 'Confirmação';
  @Input() message: string = 'Deseja confirmar?';
  @Output() confirmed = new EventEmitter<boolean>();
  @Input() isConfirmationModalVisible: boolean = true; 

  onCancel(): void {
    this.confirmed.emit(false);
    this.isConfirmationModalVisible = false;
  }

  onConfirm(): void {
    this.confirmed.emit(true);
    this.isConfirmationModalVisible = false;
  }
}
