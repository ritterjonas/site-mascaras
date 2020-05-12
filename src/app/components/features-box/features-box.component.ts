import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features-box',
  templateUrl: './features-box.component.html',
  styleUrls: ['./features-box.component.css']
})
export class FeaturesBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title = '';
  @Input() txt = '';
  @Input() txt2 = '';

}
