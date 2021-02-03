import { INavData } from '@coreui/angular';


export const PersonnelNavItems: INavData[] = [
  {name: 'Acceuil', url: '/personnel/dashboard', icon: 'icon-speedometer'},
  {title: true, name: 'Espace personnel'},
  {name: 'Gérer résidents', url: '/personnel/residents', icon: 'cil-group',
    children: [
      {name: 'Déclarer résident associé', url: '/personnel/residents/declarer', icon: 'cil-user-follow'},
      {name: 'Déclarer un changement de statut', url: '/personnel/residents/changer', icon: 'cil-user'},
      {name: 'Gérer contactes', url: '/personnel/residents/contacte', icon: 'cil-list'}
    ]
  },
  {name: 'Gérer contacts', url: '/personnel/condtact', icon: 'cil-group',
    children: [
    {name: 'Valider contact et rattachement', url: '/personnel/contact/valider', icon: 'cil-user'},
    ]
  },
  {name: 'Calendrier', url: '/personnel/calendrier', icon: 'cil-calendar',
    children: [
      {name: 'Déclarer créneaux', url: '/personnel/calendrier/declarer', icon: 'cil-calendar-check'},
      {name: 'Planning créneaux', url: '/personnel/calendrier/consulter', icon: 'cil-calendar'},
      {name: 'Créneaux libre', url: '/personnel/calendrier/creneau-libre', icon: 'cil-calendar'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/rendezvous', icon: 'cil-folder',
    children: [
      // tslint:disable-next-line:max-line-length
      {name: 'Valider un rendez-vous', url: '/personnel/rendezvous/valider-refuser', icon: 'cil-folder-open'},
      {name: 'Annuler un rendez-vous', url: '/personnel/rendezvous/annuler', icon: 'cil-folder-open'},
      {name: 'Reporter un rendez-vous', url: '/personnel/rendezvous/reporter', icon: 'cil-folder-open'}
    ]
  }
];

export const DirectionNavItems: INavData[] = [
  {name: 'Acceuil', url: '/direction/dashboard', icon: 'icon-speedometer', badge: {variant: 'info', text: 'NEW'}},
  {title: true, name: 'Espace direction'},
  {name: 'Espace du contact', url: '/direction/residents', icon: 'cil-groupr',
    children: [
      {name: 'Créer résident', url: '/direction/residents/créer', icon: 'cil-user-follow'},
      {name: 'Affecter résident', url: '/direction/residents/affecter', icon: 'cil-user'},
      {name: 'Déclarer changement', url: '/direction/residents/changer', icon: 'cil-user'},
      {name: 'Consulter les residents', url: '/direction/residents/consulter', icon: 'cil-list'}
    ]
  },
  {name: 'Espace du Personnel', url: '/direction/personnels', icon: 'cil-group',
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
