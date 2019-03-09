import { Component, OnInit } from '@angular/core';
import { format } from 'util';
declare var require: any; 
var json = require('../../../../../assets/json/championFull.json');
var importance = require('../../../../../assets/json/spell-importance.json');

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {
  private champList = [];
  private spellKeys = ['Q','W','E','R'];
  public quizInProgress = false;
  public quizOver = false;
  public showCorrect = false;
  public isClose = false;
  public quizQuestions = [];
  public questionPool = [];
  public numQuestions = 10;
  public currentQuestion = 0;
  public currentAnswer;
  public numCorrect = 0;
  public numClose = 0;
  public spellURL = 'http://ddragon.leagueoflegends.com/cdn/9.3.1/img/spell/';
  public spellImportances;
  public champsAvailable = [];
  public champIndexesAvailable = [];
  public possibleSkills = [];
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
    this.spellImportances = importance.data.champions;
    
    for (var key in champData) {
      this.champList.push(champData[key]);
      this.champsAvailable.push({name:champData[key].name, enabled:true});
    }
  }

  private defineQuestions() {
    this.quizQuestions = [];

    //Get the list of spells to make questions of
    for(let i = 0; i < this.champsAvailable.length; i++) {
      if (this.champsAvailable[i].enabled) {
        for(let j = 0; j < 4; j++) {
          switch(this.spellImportances[this.champList[i].id].skills[j]) {
            case 0:
              if(this.questionTypes[2].enabled) {
                this.questionPool.push({champ: this.champsAvailable[i].name, key: this.spellKeys[j], spell: this.champList[i].spells[j]});
              }
            break;
            case 1:
              if(this.questionTypes[1].enabled) {
                this.questionPool.push({champ: this.champsAvailable[i].name, key: this.spellKeys[j], spell: this.champList[i].spells[j]});
              }
            break;
            case 2:
              if(this.questionTypes[0].enabled) {
                this.questionPool.push({champ: this.champsAvailable[i].name, key: this.spellKeys[j], spell: this.champList[i].spells[j]});
              }
            break;
          }
        }
        this.champIndexesAvailable.push(i);
      }
    }

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
    let question = {
      question: '',
      imageURL: '',
      skillDescription: '',
      answer: 0
    };

    let questionIndex = Math.floor(Math.random() * this.questionPool.length);
    let selectedQuestion = this.questionPool[questionIndex];
    var skillLevel;
    if (this.levelsAvailable[0].enabled) {
      skillLevel = Math.floor(Math.random() * selectedQuestion.spell.cooldown.length);
    } else if(this.levelsAvailable[1].enabled && !this.levelsAvailable[2].enabled) {
      skillLevel = 0;
    } else if(this.levelsAvailable[2].enabled && !this.levelsAvailable[1].enabled) {
      skillLevel = selectedQuestion.spell.cooldown.length-1;
    } else {
      skillLevel = Math.floor(Math.random() * 2);
      if(skillLevel) {
        skillLevel = selectedQuestion.spell.cooldown.length-1;
      }
    }

    question.question="What is the length of the cooldown on " + selectedQuestion.champ + "'s " + selectedQuestion.key + " (" + selectedQuestion.spell.name + ") at level " + (skillLevel+1) + (skillLevel==selectedQuestion.spell.cooldown.length-1 ? "(max)" : "") + " in seconds?";
    question.imageURL = this.spellURL + selectedQuestion.spell.image.full;
    
    //Preload the images
    var img = new Image();
    img. src=question.imageURL;

    question.skillDescription = selectedQuestion.spell.description;
    question.answer=selectedQuestion.spell.cooldown[skillLevel];
    return question;
  }

  public submitAnswer() {
    if(this.currentAnswer == this.quizQuestions[this.currentQuestion].answer) {
      this.numCorrect++;
    } else if(this.currentAnswer >= Math.floor(this.quizQuestions[this.currentQuestion].answer*.9) && this.currentAnswer <= Math.ceil(this.quizQuestions[this.currentQuestion].answer*1.1)) {
      this.numClose++;
      this.isClose = true;
    }
    this.showCorrect = true;
  }

  public nextQuestion() {
    this.isClose = false;
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
