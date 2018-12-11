import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Envelope } from '@app/shared/model/envelope';

@Component({
  selector: 'app-envelope-item',
  templateUrl: './envelope-item.component.html',
  styleUrls: ['./envelope-item.component.scss']
})
export class EnvelopeItemComponent implements OnInit {
  @Input() envelope: Envelope;
  @Output() envelopeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.envelopeSelected.emit();
  }

}
