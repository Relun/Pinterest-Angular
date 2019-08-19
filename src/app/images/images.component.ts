import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe(data =>{
      console.log(data);
     this.posts = data;
    })
  }

  ngOnInit() {
  }

}
