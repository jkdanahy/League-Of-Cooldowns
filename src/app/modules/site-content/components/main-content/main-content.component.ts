import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
var json = require('../../../../../assets/json/championFull.json');

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  public champList = [];
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/';

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
