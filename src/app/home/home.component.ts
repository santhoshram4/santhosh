import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  pictures =[
    {src: '../assets/images/ser1.jpg' , name:'laptop' },
    {src: '../assets/images/ser2.jpg' , name:'meetinghall' },
    {src: '../assets/images/ser3.jpg' , name:'sample' },
    {src: '../assets/images/ser4.jpg' , name:'book' }
  ] 
  
  
  //  name = 'Angular';
  // items = [
  //   {name:'laptop'},
  //   {name:'Live'},
  //   {name:'Meetinghall'},
  //   {name:'Sample'},
  //   {name:'Book'},
  // ]
  search = '';
  
  

  constructor( private router:Router) { }
  addClick(){
    alert('check')
  }

  ngOnInit(): void {
  }

}
