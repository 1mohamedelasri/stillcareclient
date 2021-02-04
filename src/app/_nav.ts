import { INavData } from '@coreui/angular';


export const personnelNavItems: INavData[] = [
  {name: 'Acceuil', url: '/personnel/dashboard', icon: 'icon-speedometer'},
  {title: true, name: 'Espace personnel'},
  {name: 'Gérer résidents', url: '/personnel/residents', icon: 'icon-puzzle',
    children: [
      {name: '  Déclarer résident', url: '/personnel/residents/declarer', icon: 'cil-toll'},
      {name: '  Déclarer un changement', url: '/personnel/residents/changer', icon: 'cil-toll'},
      {name: '  Gérer contactes', url: '/personnel/residents/contacte', icon: 'cil-toll'}
    ]
  },
  {name: 'Calendrier', url: '/personnel/calendrier', icon: 'icon-cursor',
    children: [
      {name: '  Déclarer créneaux', url: '/personnel/calendrier/declarer', icon: 'cil-toll'},
      {name: '  Supprimer créneaux', url: '/personnel/calendrier/supprimer', icon: 'cil-toll'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/rendezvous', icon: 'icon-star',
    children: [
      // tslint:disable-next-line:max-line-length
      {name: 'Réservations des familles', url: '/personnel/rendezvous/familles', icon: 'cil-toll'},
      {name: 'Deplacer rendez-vous', url: '/personnel/rendezvous/deplacer', icon: 'cil-toll'},
      {name: 'Annuler rendez-vous', url: '/personnel/rendezvous/annuler', icon: 'cil-toll'},
      {name: 'Reporter rendez-vous', url: '/personnel/rendezvous/reporter', icon: 'cil-toll'},
      {name: 'Details rendez-vous', url: '/personnel/rendezvous/details', icon: 'cil-toll'}
    ]
  }
];

export const DirectionNavItems: INavData[] = [
  {name: 'Acceuil', url: '/direction/dashboard', icon: 'icon-speedometer', badge: {variant: 'info', text: 'NEW'}},
  {title: true, name: 'Espace direction'},
  {name: 'Espace de résidents', url: '/direction/residents', icon: 'icon-puzzle',
    children: [
      {name: '  Créer résident', url: '/direction/residents/créer', icon: 'cil-toll'},
      {name: '  Affecter résident', url: '/direction/residents/affecter', icon: 'cil-toll'},
      {name: '  lite des residents', url: '/direction/residents/consulter', icon: 'cil-toll'}
    ]
  },
  {name: 'Espace de Personnels', url: '/direction/personnels', icon: 'icon-puzzle',
    children: [
      {name: '  Ajouter un personnel', url: '/direction/personnels/créer', icon: 'cil-toll'},
      {name: '  Modifier un personnel', url: '/direction/personnels/affecter', icon: 'cil-toll'},
      {name: '  liste des personnels', url: '/direction/personnels/list', icon: 'cil-toll'}
    ]
  },
  {name: 'Calendrier', url: '/direction/calendrier', icon: 'icon-cursor',
    children: [
      {name: '  déclarer créneaux', url: '/direction/calendrier/declarer', icon: 'cil-toll' },
      {name: '  consulter créneaux', url: '/direction/calendrier/consulter', icon: 'cil-toll'},
    ]
  },
  {
    name: 'Gérer unités', url: '/direction/unites', icon: 'icon-star'
  }
];

export const ContactNavItems: INavData[] = [
  {name: 'Acceuil', url: '/contact/dashboard', icon: 'icon-speedometer'},
  {title: true, name: 'Espace de contacts'},
  {name: 'Calendrier', url: '/contact/calendrier', icon: 'cis-calendar',
    children: [
      {name: '  consulter créneaux', url: '/contact/calendrier/consulter', icon: 'cil-toll'},
      {name: '  Réserver un rendez-vous', url: '/contact/calendrier/consulter', icon: 'cil-toll'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/contact/rendezvous', icon: 'icon-star',
    children: [
      {name: '  Déclarer une absence', url: '/contact/rendezvous/absence', icon: 'cil-toll'},
      {name: '  Annuler rendez-vous', url: '/contact/rendezvous/annuler', icon: 'cil-toll'},
      {name: '  Annuler une réservation ', url: '/contact/rendezvous/reservation', icon: 'cil-toll'},
    ]
  }
];
