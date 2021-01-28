import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecard-list',
  templateUrl: './profilecard-list.component.html',
  styleUrls: ['./profilecard-list.component.scss']
})
export class ProfilecardListComponent implements OnInit {
  profiles: any = [{name: 'personnel1', img: '../../../../assets/content/doctor-400-1.jpg'},
    {name: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'},
    {name: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg'}];

  constructor() { }

  ngOnInit(): void {
  }

}
