import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmName:string=""
  filmList:any=[]


  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.getFilms().subscribe((data:any)=>{
      this.filmList=data.results
      console.log(this.filmList);
      
    })
  }

}
