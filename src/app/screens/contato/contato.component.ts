import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  private counter = 0;

  @Input() showModal: boolean;
  @Output() showModalChange = new EventEmitter();

  @Output() openModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerAdmin() {
    this.counter++;

    if (this.counter > 5) {
      const password = window.prompt('Digite a senha para acessar essa área');
      if (password === 'aj') {
        this.openModal.emit(true);
      } else {
        alert('Senha incorreta');
      }
    }

    setTimeout(() => {
      this.counter = 0;
    }, 1000);
  }
}
