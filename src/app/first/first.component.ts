import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ShareDateService } from '../sharedDate/share-date.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  dataVar: any;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


  constructor(private router: Router, private shareddata: ShareDateService) { }
  message = "Wellcome"

  ngOnInit(): void {
  }

  onlogin() {
    console.log(this.form)
    if (this.form.value.username && this.form.value.password) {

      this.dataVar = this.form.value.username;
      this.dataVar = this.shareddata.setMessage(this.dataVar)
      console.log(this.dataVar)

      console.log(this.shareddata)
      this.router.navigate(['images'])

    }
    else {
      this.form.reset();
    }
    console.log(this.form)
  }
}
