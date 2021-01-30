import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUnit, UnitStatus } from '../../common/interfaces/Unite';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.scss']
})
export class UnitCreateComponent implements OnInit {
  unites: IUnit[] = [
    { id: '1', name: 'Unité 1', status: UnitStatus.COVID, desc: "The best 1 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-2.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-3.jpg' }] },
    { id: '2', name: 'Unité 2', status: UnitStatus.DEJOUR, desc: "The best 2 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-4.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-2.jpg' }] },
    { id: '3', name: 'Unité 3', status: UnitStatus.FERMEE, desc: "The best 3 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-5.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg' }] },
    { id: '4', name: 'Unité 4', status: UnitStatus.DEJOUR, desc: "The best 4 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-6.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg' }] },
    { id: '5', name: 'Unité 5', status: UnitStatus.OUVERTE, desc: "The best 5 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-2.jpg' }] },
    { id: '6', name: 'Unité 6', status: UnitStatus.OUVERTE, desc: "The best 6 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-5.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-3.jpg' }] },
    { id: '7', name: 'Unité 7', status: UnitStatus.COVID, desc: "The best 7 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-3.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-4.jpg' }] },
    { id: '8', name: 'Unité 8', status: UnitStatus.FERMEE, desc: "The best 8 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-4.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-5.jpg' }] },
    { id: '9', name: 'Unité 9', status: UnitStatus.OUVERTE, desc: "The best 9 unit of the world", personnels: [{ name: 'personnel2', img: '../../../../assets/content/doctor-400-5.jpg' }, { name: 'personnel3', img: '../../../../assets/content/doctor-400-6.jpg' }] },
  ];

  unit: IUnit;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.router.url.includes('/modifier')) {
      let id: string;
      this.route.queryParams.subscribe(params => {
        id = params['id'];
      });
      this.unit = this.unites.find(el => el.id === id);
    }
    else if (this.router.url.includes('/creer')) {
      this.unit = { id: '-1', name: '', status: UnitStatus.OUVERTE, desc: "", personnels: [] };
    }
  }
}