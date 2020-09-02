import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-time-todonation',
  templateUrl: './select-time-todonation.component.html',
  styleUrls: ['./select-time-todonation.component.css']
})

export class SelectTimeTodonationComponent implements OnInit {
   
  answer:string='';
  answer1:string='';
  answer2:string='';
  answer3:string='';
  display: boolean;

   


  // data:Date=new Date();
  // settings={
  //   bigBanner:true,
  //   timePicker:true,
  //   format:'dd-mm-yyy hh:mm a',
  //   defaultOpen:false,
  //   closeOnSelect:false
  // };




  continue(){
      
   if(this.answer=="no"||this.answer1=="no"||this.answer2=="no"||this.answer3=="no"){
     alert("sorry u cant can donate your blood beaucue your health")
     this.display=true;

   }
   else{
    this.display=false;
   }
   
  }


  constructor() { }

  ngOnInit(): void {
  }

}

