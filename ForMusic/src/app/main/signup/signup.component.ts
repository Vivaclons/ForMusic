import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProServiceService} from '../../pro-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  new = false;
  form: FormGroup;
  subs = [];
  constructor(private dialog: MatDialogRef<SignupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private service: ProServiceService) {

    if (data) {
      this.new = false;
      this.form = this.formBuilder.group({
        id: [data.id, Validators.required],
        Name: [data.Name, Validators.required],
        Surname: [data.Surname, Validators.required],
        userName: [data.userName, Validators.required],
        password: [data.password, Validators.required],
        roleID: [parseInt(data.subsId, 10), Validators.required]
      });
    } else {
      this.form = this.formBuilder.group({
        Name: ['', Validators.required],
        Surname: ['', Validators.required],
        userName: ['', Validators.required],
        password: ['', Validators.required],
        roleID: ['', Validators.required]
      });
      this.new = true;
    }
  }

  create() {
    this.dialog.close(this.form.getRawValue());
  }

  getRoles() {
    this.service.getAllSubs().subscribe(res => {
      this.subs = res;
    });
  }

  ngOnInit(): void {
    this.getRoles();
  }
}
