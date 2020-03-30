import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //for making steps 
  private stepper: Stepper;
  //for boxes section
  doctorGif = "https://res.cloudinary.com/dhbxjmnbz/image/upload/v1585518439/gifs/doctor1_okapnd.gif";
  voiceOne = "";
  voiceError = "Your browser does not support the audio element.";
  //covid icon
  covidIcon = "https://res.cloudinary.com/dhbxjmnbz/image/upload/v1585518438/images/covid-19_glg2fb.png";
  //cough icon
  coughIcon = "https://res.cloudinary.com/dhbxjmnbz/image/upload/v1585518432/images/cough_ogltnq.png";
  //fatigue
  fatigueIcon = "https://res.cloudinary.com/dhbxjmnbz/image/upload/v1585518434/images/tired-2_dcac7w.png";
  //breathing-difficulty icon
  breathingdifficultyIcon = "https://res.cloudinary.com/dhbxjmnbz/image/upload/v1585518430/images/breathingdifficultyIcon_qg0ojc.png";
  //mic gif
  micGif = "https://res.cloudinary.com/dhbxjmnbz/image/upload/v1585518444/gifs/mic3_erifxi.gif";
  //type writer  variables
  private typewriter_text: string = "";
  //private typewriter_text_2: string = "Have you recently traveled to a high risk area for covid 19 ? /n  Yes or No";
  private typewriter_display: string = "";
  //paths variables of sounds for all steps
  stepOneSound = "https://res.cloudinary.com/dhbxjmnbz/video/upload/v1585518427/sounds/prosody-volumex-softpro1585161573_mvt8ms.mp3";
  stepTwoSound = "https://res.cloudinary.com/dhbxjmnbz/video/upload/v1585518427/sounds/Have-you-recently-traveled-to-1585224696_akxsv3.mp3";
  stepThreeSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  stepFourSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  stepFiveSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  stepSixSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  stepSevenSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  stepEightSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  stepNineSound = "assets/sounds/Have-you-recently-traveled-to-1585224696.mp3";
  //prev audio
  prev ; prev2; prev3 ; prev4 ; prev5 ; prev6 ; prev7 ; prev8 ;prev9;
  //error alert 
  errorAlert = "";
  errorMessage = "";
  constructor() { 
  
  }
  
  autoPlayVoice(path:string){
	  this.voiceOne = path;
	  let audio = new Audio();
	  audio.src = this.voiceOne;
	  //audio.pause();
	  //audio.currentTime = 0;
	  audio.volume = 0.5;
	  audio.load();
	  audio.play();
	  return audio;
  }
  
  stopVoice(path:string){
	  this.voiceOne = path;
	  let audio = new Audio();
	  audio.src = this.voiceOne;
	  audio.pause();
	  audio.currentTime = 0;
  }
  
  ngOnInit() {
	  this.autoPlayVoice(this.stepOneSound);
	  //for steps
	  this.stepper = new Stepper(document.querySelector('#stepper1'), {
		linear: true,
		animation: true
    });
	//call typwiter function 
	this.typewriter_display = "";
	this.typewriter_text = "Please Enter your Name , Age and Gender";
	this.typingCallback(this);
	this.typewriter_display = "";
  }
  
  
  //get first step form data 
  validate(name:string,age:number){
	  if( (name != "" || name != null) && ( age > 1 && age < 150) ){
		  this.errorAlert = "";
		  this.errorMessage = "";
		  this.nextBlock();
	  }else {
		  this.errorMessage = "step1Error";
		  this.showError();
	  }
  }  
  
  //show error
  showError(){
	  if(this.errorMessage == "step1Error"){
		  this.errorAlert =  "Please enter email and age";
	  }
  }
  onSubmit() {
    // do something here
	return false;
  }
  
  //next step 
  nextBlock(){
	  this.stepper.next();
  }
  //prev step
  prevBlock(){
	  this.stepper.previous();
  }
  //tyewriter function 
  typingCallback(that) {
	  let total_length = that.typewriter_text.length;
	  let current_length = that.typewriter_display.length;
	  if (current_length < total_length) {
		that.typewriter_display += that.typewriter_text[current_length];
		setTimeout(that.typingCallback, 50, that);
	  }
	  
  }
  //changing typewriter_text
  changeTypeWriterText(text:string){
	  if(text == "step1"){
		  //this.stopVoice(this.stepTwoSound);
		  this.prev = this.autoPlayVoice(this.stepOneSound);
		  /* this.prev2.pause();
		  this.prev3.pause();
		  this.prev4.pause();
		  this.prev5.pause();
		  this.prev6.pause();
		  this.prev7.pause();
		  this.prev8.pause();
		  this.prev9.pause();
		  this.prev2.currentTime = 0;
		  /*this.prev3.currentTime = 0;
		  this.prev4.currentTime = 0;
		  this.prev5.currentTime = 0;
		  this.prev6.currentTime = 0;
		  this.prev7.currentTime = 0;
		  this.prev8.currentTime = 0;
		  this.prev9.currentTime = 0;
		  */this.typewriter_display = "";
		  this.typewriter_text = "";
		  this.typewriter_text = "Please Enter your Name , Age and Gender";
		  this.typingCallback(this);
		  this.typewriter_display = "";
	  }else if( text == "step2"){
		  if(this.errorMessage == "step1Error"){
			  
		  }else {
			  this.prev2 = this.autoPlayVoice(this.stepTwoSound);
			  this.prev.pause();
			  /*this.prev3.pause();
			  this.prev4.pause();
			  this.prev5.pause();
			  this.prev6.pause();
			  this.prev7.pause();
			  this.prev8.pause();
			  this.prev9.pause();
			  */this.prev.currentTime = 0;
			  /*this.prev3.currentTime = 0;
			  this.prev4.currentTime = 0;
			  this.prev5.currentTime = 0;
			  this.prev6.currentTime = 0;
			  this.prev7.currentTime = 0;
			  this.prev8.currentTime = 0;
			  this.prev9.currentTime = 0;
			  */this.typewriter_display = "";
			  this.typewriter_text = "";
			  this.typewriter_text = "Have you recently traveled to a high risk area for covid 19 ? Yes or No";
			  this.typingCallback(this);  
			  this.typewriter_display = "";
		  }
		  
	}else if( text == "step3"){
		  if(this.errorMessage == "step1Error"){
			  
		  }else {
			  this.prev2 = this.autoPlayVoice(this.stepTwoSound);
			  this.prev.pause();
			  /*this.prev3.pause();
			  this.prev4.pause();
			  this.prev5.pause();
			  this.prev6.pause();
			  this.prev7.pause();
			  this.prev8.pause();
			  this.prev9.pause();
			  */this.prev.currentTime = 0;
			  /*this.prev3.currentTime = 0;
			  this.prev4.currentTime = 0;
			  this.prev5.currentTime = 0;
			  this.prev6.currentTime = 0;
			  this.prev7.currentTime = 0;
			  this.prev8.currentTime = 0;
			  this.prev9.currentTime = 0;
			  */this.typewriter_display = "";
			  this.typewriter_text = "";
			  this.typewriter_text = "Have you recently traveled to a high risk area for covid 19 ? Yes or No";
			  this.typingCallback(this);  
			  this.typewriter_display = "";
		  }
		  
	}
  }
}
