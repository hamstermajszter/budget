import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Envelope } from '@app/shared/model/envelope';
import { EnvelopeService } from '../envelope.service';

@Component({
  selector: 'app-envelope-list',
  templateUrl: './envelope-list.component.html',
  styleUrls: ['./envelope-list.component.scss']
})
export class EnvelopeListComponent implements OnInit {
  @Output() envelopeWasSelected = new EventEmitter<Envelope>();
  envelopes: Envelope[];

  constructor(private envelopeService: EnvelopeService) { }

  ngOnInit() {
    this.envelopes = this.envelopeService.getEnvelopes();
  }

  onEnvelopeSelected(envelope: Envelope) {
    console.log(envelope);
    this.envelopeWasSelected.emit(envelope);
  }

}
