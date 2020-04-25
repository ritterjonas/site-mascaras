import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() fileName = '';
  @Input() title = '';
  @Input() subtitle = '';

}
