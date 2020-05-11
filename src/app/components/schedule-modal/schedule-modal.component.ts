import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.css']
})
export class ScheduleModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() showModalChange = new EventEmitter();

  form: FormGroup;

  name = new FormControl('', [ Validators.required ]);
  phone = new FormControl('', [ Validators.required ]);
  message = new FormControl('', [ Validators.required ]);
  email = new FormControl('', [ Validators.required ]);
  date = new FormControl(moment().toDate(), [ Validators.required ]);
  hour = new FormControl('', [ Validators.required ]);

  public hours = [
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];

  public scheduledDates = [];

  private ref;
  public loading = false;

  constructor(private firestore: AngularFirestore, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.name,
      phone: this.phone,
      message: this.message,
      email: this.email,
      date: this.date,
      hour: this.hour,
    });
  }

  isUnavailable(hour) {
    return !!this.scheduledDates.find(s => s.hour === hour);
  }

  selectHour(hour) {
    this.hour.setValue(hour);
  }

  async onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    const data = {
      ...this.form.value,
      date: moment(this.form.value.date).format('YYYY-MM-DD')
    };

    await this.firestore.collection('date').doc(data.date).collection('schedule').doc(data.hour).set(data);

    this.form.reset();
    this.date.setValue(moment().toDate());
    this.showModalChange.emit(false);
  }

  ngOnInit() {
    this.loadHours();
  }

  loadHours() {
    if (this.ref) {
      this.ref.unsubscribe();
    }

    const date = moment(this.date.value).format('YYYY-MM-DD');
    this.loading = true;
    this.ref = this.firestore.collection('date').doc(date).collection('schedule').valueChanges().subscribe(data => {
      this.scheduledDates = data;
      this.loading = false;
    });
  }

}
