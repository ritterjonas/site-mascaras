import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() showModalChange = new EventEmitter();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    setTimeout(() => {
      this.Transition();
    }, 500);
  }

  Transition() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('transition').classList.add('show');
    }
  }
}
