import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {
  isLinear = false;
  firstFormGroup: any;
  secondFormGroup: any;


  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor(private router: Router, private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  inicio(){
    this.router.navigate(['/inicio']);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
