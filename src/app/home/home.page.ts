import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
		leads = [];
	  refDatabase = firebase.database().ref('leads');

	  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
	    this.refDatabase.on('value', resp => {
	      this.leads = [];
	      this.leads = convertData(resp);
	    });
	  }

	  edit(key) {
	    this.router.navigate(['/edit/'+key]);
	  }

	  async delete(key) {
	    const alert = await this.alertController.create({
	      header: 'Confirm Delete',
	      message: 'Are you sure want to delete this lead?',
	      buttons: [
	        {
	          text: 'Cancel',
	          role: 'cancel',
	          cssClass: 'secondary',
	          handler: (x) => {
	            
	          }
	        }, {
	          text: 'Delete',
	          handler: () => {
	            firebase.database().ref('leads/'+key).remove();
	          }
	        }
	      ]
	    });

	    await alert.present();
	  }
}

export const convertData = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
}
