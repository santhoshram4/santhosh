import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('santhosh',Validators.required),
    password: new FormControl('kumar',Validators.required)
  })


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onlogin() {
    console.log(this.form)
    if (this.form.value.username && this.form.value.password) {
      this.router.navigate(['images'])
    }
    else {
      this.form.reset();
    }
    console.log(this.form)
  }
}
