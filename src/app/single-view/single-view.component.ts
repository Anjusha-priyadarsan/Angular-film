import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  id:any=""
singleFilm:any={}
  constructor(private service:DataService,private rout:ActivatedRoute){

  }
  ngOnInit(): void {

    this.rout.params.subscribe((data:any)=>{
      this.id=data.id
      // console.log(this.id);
      this.service.getFilms().subscribe((response:any)=>{
      this.singleFilm=  response.results.find((i:any)=>i.id==this.id)
      console.log(this.singleFilm);
      
      })
      
    })

  }

}
