import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProServiceService} from '../../pro-service.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  new = false;
  formG: FormGroup;
  roles = [];
  constructor(private dialog: MatDialogRef<DialogboxComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private service: ProServiceService) {

    if (data) {
      this.new = false;
      this.formG = this.formBuilder.group({
        userName: [data.userName, Validators.required],
        password: [data.password, Validators.required],
        roleID: [parseInt(data.roleID, 10), Validators.required]
      });
    } else {
      this.formG = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        roleID: ['', Validators.required]
      });
      this.new = true;
    }
  }

  update() {
    this.dialog.close(this.formG.getRawValue());
  }
  getRoles() {
    this.service.getAllRoles().subscribe(res => {
      this.roles = res;
    });
  }

  ngOnInit(): void {
    this.getRoles();
  }
}
