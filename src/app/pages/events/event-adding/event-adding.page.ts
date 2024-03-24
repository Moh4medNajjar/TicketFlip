import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-adding',
  templateUrl: './event-adding.page.html',
  styleUrls: ['./event-adding.page.scss'],
})
export class EventAddingPage implements OnInit {
  event = {
    title: '',
    category: '',
    price: 0,
    maxTickets: 0,
    startDate: '',
    startTime: '',
    place: ''
  };

  constructor() { }

  createEvent() {
    // Add logic to create the event using the form data
    console.log('Creating event...',this.event);
  }
  cancel(){
    console.log("cancelling...");
  }

  ngOnInit() {
  }
}


