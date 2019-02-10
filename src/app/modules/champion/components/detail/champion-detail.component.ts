import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var require: any; 
var json = require('../../../../../assets/json/championFull.json');

@Component({
  selector: 'champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.sass']
})
export class ChampionDetailComponent implements OnInit {
  public champData = {};
  public selectedSpell;
  public loadingURL ='';
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/';
  private champId;

  constructor(private route:ActivatedRoute, private router:Router) {
    this.champId = (route.snapshot.params['id']);
  }

  ngOnInit() {
    let champs = json.data;
    this.loadingURL ='http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + this.champId + '_0.jpg';
    console.log(champs);
    if(champs[this.champId])
    {
        this.champData = champs[this.champId];
    }
  }

  public setSelectedSpell(spell, i) {
    let abilityList=['Q','W','E','R'];
    this.selectedSpell = spell;
    this.selectedSpell.abilityKey = abilityList[i];
  }

}
