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
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';

  constructor(private route:ActivatedRoute, private router:Router) {
    let champs = this.modifyJsonKeys(json.data);
    let champId = (route.snapshot.params['id']);
    console.log(champs);
    if(champs[champId])
    {
        this.champData = champs[champId];
    }
  }

  ngOnInit() {
  }

  modifyJsonKeys(champData) {
    let returnData = {};
    for (var key in champData) {
      if (champData.hasOwnProperty(key)) {
          returnData[key.toLowerCase()] = champData[key];
      }
    }
    return returnData;
  }

}
