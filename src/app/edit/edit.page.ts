import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  leadForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.leadForm = this.formBuilder.group({
        'lead_title' : [null, Validators.required],
        'lead_comment' : [null, Validators.required]
      });
      this.getLead(this.route.snapshot.paramMap.get('key'));
    }

  ngOnInit() {
  }

  getLead(key) {
    firebase.database().ref('leads/'+key).on('value', resp => {
      let lead = convertData(resp);
      this.leadForm.controls['lead_title'].setValue(lead.lead_title);
      this.leadForm.controls['lead_comment'].setValue(lead.lead_comment);
    });
  }

  updateLead() {
    let newlead = firebase.database().ref('leads/'+this.route.snapshot.paramMap.get('key')).update(this.leadForm.value);
    

    this.router.navigate(['/home/']);
  }

  

}

export const convertData = snapshot => {
    let item = snapshot.val();
    item.key = snapshot.key;

    return item;
  }
