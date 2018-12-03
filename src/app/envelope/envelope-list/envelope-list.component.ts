import { Component, OnInit } from '@angular/core';

import { Envelope } from '../envelope.model';

@Component({
  selector: 'app-envelope-list',
  templateUrl: './envelope-list.component.html',
  styleUrls: ['./envelope-list.component.scss']
})
export class EnvelopeListComponent implements OnInit {

  envelopes: Envelope[] = [
    new Envelope('Household', 80000),
    new Envelope('Fun', 50000)
  ];

  constructor() { }

  ngOnInit() {
  }

}
