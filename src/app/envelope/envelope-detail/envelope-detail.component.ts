import { Component, OnInit, Input } from '@angular/core';

import { Envelope } from '@app/shared/model/envelope';

@Component({
  selector: 'app-envelope-detail',
  templateUrl: './envelope-detail.component.html',
  styleUrls: ['./envelope-detail.component.scss']
})
export class EnvelopeDetailComponent implements OnInit {
  @Input() envelope: Envelope;

  constructor() { }

  ngOnInit() {
  }

}
