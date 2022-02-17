import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDateService } from '../sharedDate/share-date.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pictures = [
    { src: '../assets/images/ser1.jpg', name: 'laptop' },
    { src: '../assets/images/ser2.jpg', name: 'meetinghall' },
    { src: '../assets/images/ser3.jpg', name: 'sample' },
    { src: '../assets/images/ser4.jpg', name: 'book' }
  ]

  search = '';

  message: any

  constructor(private router: Router, private shareddata: ShareDateService,) { }
  addClick() {
    alert('check')
  }

  
    
  
  ngOnInit(): void {
    
    this.message = this.shareddata.getMessage()
    console.log(this.message)
    this.message= sessionStorage.getItem('username') 
    
 
  }

}
