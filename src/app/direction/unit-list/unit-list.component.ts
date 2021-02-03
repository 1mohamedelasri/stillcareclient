import {Component} from '@angular/core';
import { IUnit, UnitStatus } from '../../common/interfaces/Unit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})

export class UnitListComponent {

  unites: IUnit[] = [
    { id: '1', name: 'Unité 1', status: UnitStatus.COVID,   desc: 'The best 1 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-2.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-3.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '2', name: 'Unité 2', status: UnitStatus.DEJOUR,  desc: 'The best 2 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom2', img: '../../../../assets/content/doctor-400-4.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom2', img: '../../../../assets/content/doctor-400-2.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '3', name: 'Unité 3', status: UnitStatus.FERMEE,  desc: 'The best 3 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom3', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom3', img: '../../../../assets/content/doctor-400-1.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '4', name: 'Unité 4', status: UnitStatus.DEJOUR,  desc: 'The best 4 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom4', img: '../../../../assets/content/doctor-400-6.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom4', img: '../../../../assets/content/doctor-400-1.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '5', name: 'Unité 5', status: UnitStatus.OUVERTE, desc: 'The best 5 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom6', img: '../../../../assets/content/doctor-400-1.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom6', img: '../../../../assets/content/doctor-400-2.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '6', name: 'Unité 6', status: UnitStatus.OUVERTE, desc: 'The best 6 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-3.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '7', name: 'Unité 7', status: UnitStatus.COVID,   desc: 'The best 7 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-3.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-4.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '8', name: 'Unité 8', status: UnitStatus.FERMEE,  desc: 'The best 8 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom2', img: '../../../../assets/content/doctor-400-4.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom9', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
    { id: '9', name: 'Unité 9', status: UnitStatus.OUVERTE, desc: 'The best 9 unit of the world', personnels: [{ surname: 'personnel2', name: 'prenom1', img: '../../../../assets/content/doctor-400-5.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }, { surname: 'personnel3', name: 'prenom1', img: '../../../../assets/content/doctor-400-6.jpg', function: 'certaine fonction', mail: 'mail@mail.com' }] },
  ];

    constructor(private router: Router) { }

  goToUnit(uniteId) {
    this.router.navigate(['direction/unites/consulter'], { queryParams: { id: uniteId } });
  }

  goToUnitCreation() {
    this.router.navigate(['direction/unites/creer']);
  }

  ngOnInit(): void {
  }
}
