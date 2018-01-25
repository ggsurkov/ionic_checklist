import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DefaultTemplate} from '../../../model/default-template';
import {DefaultChecklist} from "../../../model/default-checklist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public defaultTemplate: DefaultTemplate;
  public defaultChecklist: DefaultChecklist;

  constructor(public navCtrl: NavController) {
    this.defaultChecklist.createEmpty();
  }

}
