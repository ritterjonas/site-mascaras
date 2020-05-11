import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-schedule-modal-admin',
  templateUrl: './schedule-modal-admin.component.html',
  styleUrls: ['./schedule-modal-admin.component.css']
})
export class ScheduleModalAdminComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() showModalChange = new EventEmitter();

  public scheduledDates = [];

  public date = moment().toDate();
  private ref;
  public loading = false;

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.loadHours();
  }

  loadHours() {
    if (this.ref) {
      this.ref.unsubscribe();
    }
    this.scheduledDates = [];

    const date = moment(this.date).format('YYYY-MM-DD');
    this.loading = true;
    this.ref = this.firestore.collection('date').doc(date).collection('schedule').valueChanges().subscribe(data => {
      this.scheduledDates = data;
      this.loading = false;
    });
  }

  cancelSchedule(event, item) {
    event.stopPropagation();

    const date = moment(this.date).format('YYYY-MM-DD');
    this.firestore.collection('date').doc(date).collection('schedule').doc(item.hour).delete();
  }

  confirmSchedule(event, item) {
    event.stopPropagation();

    const date = moment(this.date).format('YYYY-MM-DD');
    this.firestore.collection('date').doc(date).collection('schedule').doc(item.hour).update({ confirmed: true });
  }

}
