import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailServiceService } from '../Service/detail-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailServiceService]
})
export class DetailComponent implements OnInit {

  id: any;
  records: any;
  Datas : any;
  videos : any;
  contents : any;
  original_title:any;
  posters:any[];
  production_countries:any[];
  popularity:any;
  release_date:any;
  results:any[];



  img_url="https://image.tmdb.org/t/p/w185";
  vdo_url="https://www.youtube.com/watch?v=";
  constructor(private route: ActivatedRoute,
    private moviedetail: DetailServiceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      Params => {
        this.id = +Params.get('id');
        this.moviedetail.Getdata(this.id).subscribe(
          info => {
            this.Datas = info;
            console.log(this.Datas)
          }
        )
        this.moviedetail.GetImage(this.id).subscribe(
          info => {
            this.records = info;
            console.log(this.records)
          }
        )
        this.moviedetail.GetVideo(this.id).subscribe(
          info => {
            this.videos = info;
            console.log(this.videos)
          }
        )
      }
    )
  }

}
