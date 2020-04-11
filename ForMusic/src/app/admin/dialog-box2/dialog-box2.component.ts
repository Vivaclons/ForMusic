import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProServiceService} from '../../pro-service.service';

@Component({
  selector: 'app-dialog-box2',
  templateUrl: './dialog-box2.component.html',
  styleUrls: ['./dialog-box2.component.css']
})
export class DialogBox2Component implements OnInit {
  new = false;
  form: FormGroup;

  constructor(private dialog: MatDialogRef<DialogBox2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any, private formB: FormBuilder, private service: ProServiceService) {
    if (data) {
      this.new = false;
      this.form = this.formB.group({
        id: [data.id, Validators.required],
        name: [data.name, Validators.required],
        createDate: [data.createDate, Validators.required],
        importance: [data.importance, Validators.required],
        status: [data.status, Validators.required]
      });
    } else {
      this.new = true;
      this.form = this.formB.group({
        name: ['', Validators.required],
        createDate: ['', Validators.required],
        importance: ['', Validators.required],
        status: ['', Validators.required]
      });
    }
  }

  ngOnInit(): void {
  }

  create() {
    this.dialog.close(this.form.getRawValue());
  }

  update() {
    this.dialog.close(this.form.getRawValue());
  }

}
