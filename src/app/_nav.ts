import { INavData } from '@coreui/angular';


export const personnelNavItems: INavData[] = [
  {name: 'Acceuil', url: '/personnel/dashboard', icon: 'icon-speedometer'},
  {title: true, name: 'Mes services'},
  {name: 'Gérer résidents', url: '/personnel/residents', icon: 'icon-puzzle',
    children: [
      {name: 'Déclarer résident', url: '/personnel/residents/declarer', icon: 'icon-puzzle'},
      {name: 'Déclarer un changement', url: '/personnel/residents/changer', icon: 'icon-puzzle'},
      {name: 'Gérer contactes', url: '/personnel/residents/contacte', icon: 'icon-puzzle'}
    ]
  },
  {name: 'Calendrier', url: '/personnel/calendrier', icon: 'icon-cursor',
    children: [
      {name: 'Déclarer créneaux', url: '/personnel/calendrier/declarer', icon: 'icon-cursor'},
      {name: 'Consulter créneaux', url: '/personnel/calendrier/consulter', icon: 'icon-cursor'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/rendezvous', icon: 'icon-star',
    children: [
      // tslint:disable-next-line:max-line-length
      {name: 'Réservations des familles', url: '/personnel/rendezvous/familles', icon: 'icon-star'},
      {name: 'Deplacer rendez-vous', url: '/personnel/rendezvous/deplacer', icon: 'icon-star'},
      {name: 'Annuler rendez-vous', url: '/personnel/rendezvous/annuler', icon: 'icon-star'},
      {name: 'Reporter rendez-vous', url: '/personnel/rendezvous/reporter', icon: 'icon-star'},
      {name: 'Details rendez-vous', url: '/personnel/rendezvous/details', icon: 'icon-star'}
    ]
  }
];

export const DirectionNavItems: INavData[] = [
  {name: 'Acceuil', url: '/direction/dashboard', icon: 'icon-speedometer', badge: {variant: 'info', text: 'NEW'}},
  {title: true, name: 'Espace direction'},
  {name: 'Espace du contact', url: '/direction/residents', icon: 'cil-user',
    children: [
      {name: 'Créer résident', url: '/direction/residents/créer', icon: 'cil-user-follow'},
      {name: 'Affecter résident', url: '/direction/residents/affecter', icon: 'cil-user'},
      {name: 'Déclarer changement', url: '/direction/residents/changer', icon: 'cil-user'},
      {name: 'Consulter les residents', url: '/direction/residents/consulter', icon: 'cil-list'}
    ]
  },
  {name: 'Espace du Personnel', url: '/direction/personnels', icon: 'icon-puzzle',
    children: [
      {name: 'Ajouter un personnel', url: '/direction/personnels/créer', icon: 'cil-user-follow'},
      {name: 'Modifier un personnel', url: '/direction/personnels/affecter', icon: 'cil-user'},
      {name: 'Consulter liste des personnels', url: '/direction/personnels/consulter', icon: 'cil-list'}
    ]
  },
  {name: 'Calendrier', url: '/direction/calendrier', icon: 'cil-calendar',
    children: [
      {name: 'déclarer créneaux', url: '/direction/calendrier/declarer', icon: 'cil-calendar-check'},
      {name: 'consulter créneaux', url: '/direction/calendrier/consulter', icon: 'cil-calendar'},
    ]
  },
  {
    name: 'Gérer unités', url: '/direction/unites', icon: 'cil-library'
  }
];

export const ContactNavItems: INavData[] = [
  {name: 'Acceuil', url: '/contact/dashboard', icon: 'icon-speedometer'},
  {title: true, name: 'Espace contact'},
  {name: 'Calendrier', url: '/contact/calendrier', icon: 'cil-calendar',
    children: [
      {name: 'consulter créneaux', url: '/contact/calendrier/consulter', icon: 'cil-calendar'},
      {name: 'Réserver un rendez-vous', url: '/contact/calendrier/reserver', icon: 'cil-calendar-check'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/contact/rendezvous', icon: 'cil-folder',
    children: [
      {name: 'S\'absenter ou annuler un rendez-vous', url: '/contact/rendezvous/absence-annuler', icon: 'cil-folder-open'},
      {name: 'Annuler une réservation', url: '/contact/reservation/annuler', icon: 'cil-folder-open'},
    ]
  }
];
