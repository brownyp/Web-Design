import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.scss']
})
export class HeroAreaComponent implements OnInit {
  @Input()banner;

  constructor() { }

  ngOnInit() {
  }
}
