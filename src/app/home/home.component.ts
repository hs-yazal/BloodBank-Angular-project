import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  UpcomingNews =[];
  constructor(private NewsService:NewsService ){ 
   
  NewsService.getNews().subscribe((response)=> {
    this.UpcomingNews =response.articles ;
  },
  (err) =>{console.log(err)} )


}


  ngOnInit(): void {}


}
