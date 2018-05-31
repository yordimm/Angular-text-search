import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
 heroes: Heroe [] = [];
 query: string;
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this.heroes = this._heroesService.searchHeroe(params['query']);
      console.log(this.heroes);
    });
  }

}
