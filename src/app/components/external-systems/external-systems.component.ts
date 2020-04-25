import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-systems',
  templateUrl: './external-systems.component.html',
  styleUrls: ['./external-systems.component.css']
})
export class ExternalSystemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() fileName = '';
  @Input() title = '';
  @Input() txt = '';
}
