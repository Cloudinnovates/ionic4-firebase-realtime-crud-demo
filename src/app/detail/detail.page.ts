import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  lead = {};

  constructor(private route: ActivatedRoute,
    public router: Router) {
    firebase.database().ref('leads/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.lead = convertData(resp);
    });
  }

  ngOnInit() {
  }

  

}

export const convertData = snapshot => {
    let item = snapshot.val();
    item.key = snapshot.key;

    return item;
  }
