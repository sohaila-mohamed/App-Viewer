import { Component, OnInit } from '@angular/core';
import{imageBasic} from 'App-Viewer\src\app\components\module\Images.ts'
import { from } from 'rxjs';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  Gallery: imageBasic[];




  constructor() { }

  ngOnInit() {
    this.Gallery = [
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', thumb:
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', description: 'Image 1' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', description: 'Image 2' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', description: 'Image 3' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', description: 'Image 4' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', description: 'Image 5' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', description: 'Image 6' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', description: 'Image 7' },
      { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',description: 'Image 9' }
      ];
  }

}
