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
        Author: [data.Author, Validators.required],
        Year: [data.Year, Validators.required],
        min: [data.min, Validators.required]
      });
    } else {
      this.new = true;
      this.form = this.formB.group({
        name: ['', Validators.required],
        Author: ['', Validators.required],
        Year: ['', Validators.required],
        min: ['', Validators.required]
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
