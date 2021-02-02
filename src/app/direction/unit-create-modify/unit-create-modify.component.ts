import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUnit, UnitStatus } from '../../common/interfaces/Unit';

enum Mode {
  CREATE,
  UPDATE
}

@Component({
  selector: 'app-unit-create-modify',
  templateUrl: './unit-create-modify.component.html',
  styleUrls: ['./unit-create-modify.component.scss']
})
export class UnitCreateModifyComponent implements OnInit {
  public unitStatus = Object.values(UnitStatus);

  unites: IUnit[] = [
    { id: '1', name: 'Unité 1', status: UnitStatus.COVID,   desc: "The best 1 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-2.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-3.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '2', name: 'Unité 2', status: UnitStatus.DEJOUR,  desc: "The best 2 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom2', img: '../../../../assets/content/doctor-400-4.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom2', img: '../../../../assets/content/doctor-400-2.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '3', name: 'Unité 3', status: UnitStatus.FERMEE,  desc: "The best 3 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom3', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom3', img: '../../../../assets/content/doctor-400-1.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '4', name: 'Unité 4', status: UnitStatus.DEJOUR,  desc: "The best 4 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom4', img: '../../../../assets/content/doctor-400-6.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom4', img: '../../../../assets/content/doctor-400-1.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '5', name: 'Unité 5', status: UnitStatus.OUVERTE, desc: "The best 5 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom6', img: '../../../../assets/content/doctor-400-1.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom6', img: '../../../../assets/content/doctor-400-2.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '6', name: 'Unité 6', status: UnitStatus.OUVERTE, desc: "The best 6 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-3.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '7', name: 'Unité 7', status: UnitStatus.COVID,   desc: "The best 7 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-3.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-4.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '8', name: 'Unité 8', status: UnitStatus.FERMEE,  desc: "The best 8 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom2', img: '../../../../assets/content/doctor-400-4.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom9', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '9', name: 'Unité 9', status: UnitStatus.OUVERTE, desc: "The best 9 unit of the world", personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-6.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
  ];

  unit: IUnit;
  currentMode: Mode;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.router.url.includes('/modifier')) {
      this.currentMode = Mode.UPDATE;
      let id: string;
      this.route.queryParams.subscribe(params => {
        id = params['id'];
      });
      this.unit = this.unites.find(el => el.id === id);
    } else if (this.router.url.includes('/creer')) {
      this.currentMode = Mode.CREATE;
      this.unit = { id: '-1', name: '', status: UnitStatus.OUVERTE, desc: "", personnels: [] };
    }
  }

  onBackButtonClick() {
    if (this.currentMode === Mode.CREATE) {
      this.router.navigate(['direction/unites']);
    } else {
      this.router.navigate(['direction/unites/consulter'], { queryParams: { id: this.unit.id } } );
    }
  }
}