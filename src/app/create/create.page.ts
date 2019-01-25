import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  leadForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.leadForm = this.formBuilder.group({
        'lead_title' : [null, Validators.required],
        'lead_comment' : [null, Validators.required]
      });
    }

  ngOnInit() {
  }

  saveLead() {
    let newLead = firebase.database().ref('leads/').push();
    newLead.set(this.leadForm.value);
    this.router.navigate(['/home/']);
  }

}
