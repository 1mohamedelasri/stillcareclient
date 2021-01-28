import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.scss']
})
export class ProfilecardComponent implements OnInit {
  @Input() profile;
  constructor() { }

  ngOnInit(): void {
  }

}
