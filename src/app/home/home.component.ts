import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Service/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieServiceService]
})
export class HomeComponent implements OnInit {
  Datas: any[];
  value:any;
  img_url = "https://image.tmdb.org/t/p/w500/";
  results: any[];
  Searchvalues:any[];
  

  constructor(private movieser: MovieServiceService) { }

  ngOnInit() {
    this.movieser.Getdata().subscribe(
      info => {
        this.Datas = info.results;
        console.log(this.Datas)
      }
    )
  }
  PerformSearch(Item:HTMLInputElement) {
    this.movieser.Search(Item).subscribe(
      info => {
           this.Searchvalues = info.results;
      }
    )

  }

}
