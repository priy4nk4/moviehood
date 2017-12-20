import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServiceService {
  Url= "https://api.themoviedb.org/3/movie/top_rated?api_key=700885dbedcae301c1e75c1c6109d505";
  search_url = "https://api.themoviedb.org/3/search/movie?api_key=700885dbedcae301c1e75c1c6109d505&query=";

  constructor(private http:Http) { }
  Getdata(){
    return this.http.get(this.Url).map(Response => Response.json())
  }
  Search(Item){
    return this.http.request(this.search_url+Item).map(Response => Response.json())
  } 
}
