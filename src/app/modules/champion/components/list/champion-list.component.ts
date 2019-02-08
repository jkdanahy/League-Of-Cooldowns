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
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';

  private shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  constructor() {
    let champData = json.data;
    for (var key in champData) {
      if (champData.hasOwnProperty(key)) {
          this.champList.push(champData[key]);
      }
    }
    console.log(champData);
   }

  ngOnInit() {
  }

}
