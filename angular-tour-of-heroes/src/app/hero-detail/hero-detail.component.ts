import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // Properties
  @Input() hero?: Hero;

  constructor() {}

  // Life Cycle Methods
  ngOnInit(): void {}

  // Methods
}
