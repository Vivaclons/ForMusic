import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  formG: FormGroup;
  constructor(private auth: AuthServiceService, private formBuilder: FormBuilder) {
    this.formG = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }
  login() {
    this.auth.loginAdmin(this.formG.getRawValue().userName, this.formG.getRawValue().passWord);
  }

}
