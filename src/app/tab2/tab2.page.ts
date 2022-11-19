import { PokemonService, Ability, Stat2 } from './../services/pokemon.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pokemondetail? = null;
  slide0pts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };
  constructor(private route: ActivatedRoute,private pokemonService: PokemonService) {}

  ngOnInit(){
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemonDetails(name).subscribe(res =>{
      this.pokemondetail = res;
      console.log(this.pokemondetail.stats[0].base_stat);
      console.log(this.pokemondetail.stats[0].stat.name);
    });
  }

}
