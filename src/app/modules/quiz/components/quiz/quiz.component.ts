import { Component, OnInit } from '@angular/core';
declare var require: any; 
var json = require('../../../../../assets/json/championFull.json');

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {
  private champList = [];
  public quizInProgress = false;
  public quizOver = false;
  public showCorrect = false;
  public quizQuestions = [];
  public numQuestions = 10;
  public currentQuestion = 0;
  public currentAnswer;
  public numCorrect = 0;
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/9.3.1/img/spell/';
  public champsAvailable = [];
  public champIndexesAvailable = [];
  public levelsAvailable = [
    {name:"All", enabled: false},
    {name:"First", enabled: true},
    {name:"Max", enabled: false}
  ];
  public questionTypes = [
    {name:"Important Spells", enabled: true},
    {name:"Dangerous Spells", enabled: true},
    {name:"Other Spells", enabled: true}
  ];
  constructor() { }

  ngOnInit() {
    let champData=json.data;
    
    for (var key in champData) {
      this.champList.push(champData[key]);
      this.champsAvailable.push({name:champData[key].name, enabled:true});
    }
  }

  private defineQuestions() {
    this.quizQuestions = [];
    for(let i = 0; i < this.numQuestions; i++) {
      this.quizQuestions.push(this.generateQuestion());
    }
    this.quizInProgress=!this.quizInProgress;
  }

  public enableAllChamps() {
    for(let i = 0; i < this.champsAvailable.length; i++) {
      this.champsAvailable[i].enabled = true;
    }
  }

  public disableAllChamps() {
    for(let i = 0; i < this.champsAvailable.length; i++) {
      this.champsAvailable[i].enabled = false;
    }
  }

  private generateQuestion() {
    let spellKeys = ['Q','W','E','R'];
    let question = {
      question: '',
      imageURL: '',
      skillDescription: '',
      answer: 0
    };

    for(let i = 0; i < this.champsAvailable.length; i++) {
      if (this.champsAvailable[i].enabled) {
        this.champIndexesAvailable.push(i);
      }
    }

    let champId = this.champIndexesAvailable[Math.floor(Math.random() * this.champIndexesAvailable.length)];
    let spellIndex = Math.floor(Math.random() * 4);
    var skillLevel;
    if (this.levelsAvailable[0].enabled) {
      skillLevel = Math.floor(Math.random() * this.champList[champId].spells[spellIndex].cooldown.length);
    } else if(this.levelsAvailable[1].enabled && !this.levelsAvailable[2].enabled) {
      skillLevel = 0;
    } else if(this.levelsAvailable[2].enabled && !this.levelsAvailable[1].enabled) {
      skillLevel = this.champList[champId].spells[spellIndex].cooldown.length-1;
    } else {
      skillLevel = Math.floor(Math.random() * 2);
      if(skillLevel) {
        skillLevel = this.champList[champId].spells[spellIndex].cooldown.length-1;
      }
    }

    question.question="What is the length of the cooldown on " + this.champList[champId].name + "'s " + spellKeys[spellIndex] + " (" + this.champList[champId].spells[spellIndex].name + ") at level " + (skillLevel+1) + (skillLevel==this.champList[champId].spells[spellIndex].cooldown.length-1 ? "(max)" : "") + " in seconds?";
    question.imageURL = this.spellURL + this.champList[champId].spells[spellIndex].image.full;
    
    //Preload the images
    var img = new Image();
    img. src=question.imageURL;

    question.skillDescription = this.champList[champId].spells[spellIndex].description;
    question.answer=this.champList[champId].spells[spellIndex].cooldown[skillLevel];
    return question;
  }

  public submitAnswer() {
    if(this.currentAnswer == this.quizQuestions[this.currentQuestion].answer) {
      this.numCorrect++;
    }
    this.showCorrect = true;
  }

  public nextQuestion() {
    if(this.currentQuestion != this.numQuestions -1)
    {
      this.currentQuestion++;
      this.currentAnswer = '';
    } else {
      this.quizInProgress = false;
      this.quizOver = true;
    }
    this.showCorrect = false;
  }
}
