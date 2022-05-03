import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  /**IMPORTANT:
  The backtick ( ` ) characters define a JavaScript template literal for embedding the id. */
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
