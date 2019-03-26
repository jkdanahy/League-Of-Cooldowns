import { Component, OnInit } from '@angular/core';
declare var require: any; 
var json = require('../../../../../assets/json/championFull.json');

@Component({
  selector: 'champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.sass']
})
export class ChampionListComponent implements OnInit {
  public champList = [];
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/';

  constructor() {
    let champData = json.data;
    for (var key in champData) {
      if (champData.hasOwnProperty(key)) {
          this.champList.push(champData[key]);
      }
    }
    this.champList.sort((a, b) => (a.name > b.name) ? 1 : -1)
   }

  ngOnInit() {
  }

}
