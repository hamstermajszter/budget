import { Component, OnInit } from '@angular/core';

import { Envelope } from '@app/shared/model/envelope';
import { EnvelopeService } from './envelope.service';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss'],
  providers: [EnvelopeService]
})
export class EnvelopeComponent implements OnInit {
  selectedEnvelope: Envelope;

  constructor() { }

  ngOnInit() {
  }

}
