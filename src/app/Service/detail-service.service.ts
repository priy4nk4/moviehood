import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailServiceService {

  

  constructor(private http:Http) { }
  Getdata(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=700885dbedcae301c1e75c1c6109d505`).map(Response => Response.json())
  }

  GetImage(Id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${Id}/images?api_key=700885dbedcae301c1e75c1c6109d505`).map(Response => Response.json())
  }
  GetVideo(Id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=700885dbedcae301c1e75c1c6109d505`).map(Response => Response.json())
  }

  


}
