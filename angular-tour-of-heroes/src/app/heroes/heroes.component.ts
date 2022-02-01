import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HEROES } from '../mock-heroes/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // Properties
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {}

  // Life Cycle Methods
  ngOnInit(): void {}

  // Methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
