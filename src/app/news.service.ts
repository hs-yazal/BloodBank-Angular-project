import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public HttpClient:HttpClient) { }

getNews():Observable<any>
 {
  return this.HttpClient.get(`http://newsapi.org/v2/top-headlines?country=us&health=business&apiKey=ce60a6cd3ccb4ed5b1889550e3600bde`)
 }
}