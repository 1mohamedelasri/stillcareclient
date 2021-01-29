import { INavData } from '@coreui/angular';


export const personnelNavItems: INavData[] = [
  {name: 'Acceuil', url: '/personnel/dashboard', icon: 'icon-speedometer', badge: {variant: 'info', text: 'NEW'}},
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
      {name: 'déclarer créneaux', url: '/personnel/calendrier/declarer', icon: 'icon-cursor'},
      {name: 'consulter créneaux', url: '/personnel/calendrier/consulter', icon: 'icon-cursor'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/rendezvous', icon: 'icon-star',
    children: [
      // tslint:disable-next-line:max-line-length
      {name: 'Réservations des familles', url: '/personnel/rendezvous/familles', icon: 'icon-star', badge: {variant: 'success', text: 'NEW'}},
      {name: 'Deplacer rendez-vous', url: '/personnel/rendezvous/deplacer', icon: 'icon-star'},
      {name: 'Annuler rendez-vous', url: '/personnel/rendezvous/annuler', icon: 'icon-star', badge: {variant: 'secondary', text: '4.7'}},
      {name: 'Reporter rendez-vous', url: '/personnel/rendezvous/reporter', icon: 'icon-star'},
      {name: 'Details rendez-vous', url: '/personnel/rendezvous/details', icon: 'icon-star'}
    ]
  }
];

export const DirectionNavItems: INavData[] = [
  {name: 'Acceuil', url: '/direction/dashboard', icon: 'icon-speedometer', badge: {variant: 'info', text: 'NEW'}},
  {title: true, name: 'Mes services'},
  {name: 'Espace de résidents', url: '/direction/residents', icon: 'icon-puzzle',
    children: [
      {name: 'Créer résident', url: '/direction/residents/créer', icon: 'icon-puzzle'},
      {name: 'Affecter résident', url: '/direction/residents/affecter', icon: 'icon-puzzle'},
      {name: 'Déclarer changement', url: '/direction/residents/changement', icon: 'icon-puzzle'},
      {name: 'Consulter les residents', url: '/direction/residents/consulter', icon: 'icon-puzzle'}
    ]
  },
  {name: 'Calendrier', url: '/direction/calendrier', icon: 'icon-cursor',
    children: [
      {name: 'déclarer créneaux', url: '/direction/calendrier/declarer', icon: 'icon-cursor'},
      {name: 'consulter créneaux', url: '/direction/calendrier/consulter', icon: 'icon-cursor'},
    ]
  },
  {name: 'Gérer unitées', url: '/direction/unite', icon: 'icon-star',
    children: [
      {name: 'Création dunité', url: '/direction/unite/creer', icon: 'icon-star', badge: {variant: 'success', text: 'NEW'}},
      {name: 'Modification  unité', url: '/direction/unite/modifier', icon: 'icon-star'},
      {name: 'Suppression unité', url: '/direction/unite/supprimer', icon: 'icon-star', badge: {variant: 'secondary', text: '4.7'}},
      {name: 'Reporter rendez-vous', url: '/direction/unite/reporter', icon: 'icon-star'},
      {name: 'affecter personnel', url: '/direction/unite/affecter', icon: 'icon-star'}
    ]
  }
];

export const ContactNavItems: INavData[] = [
  {name: 'Acceuil', url: '/contact/dashboard', icon: 'icon-speedometer', badge: {variant: 'info', text: 'NEW'}},
  {title: true, name: 'Espace de résidents'},
  {name: 'Calendrier', url: '/contact/calendrier', icon: 'icon-cursor',
    children: [
      {name: 'consulter créneaux', url: '/contact/calendrier/consulter', icon: 'icon-cursor'},
      {name: 'Réserver un rendez-vous', url: '/contact/calendrier/consulter', icon: 'icon-cursor'},
    ]
  },
  {name: 'Gérer rendez-vous', url: '/contact/rendezvous', icon: 'icon-star',
    children: [
      {name: 'Déclarer une absence', url: '/contact/rendezvous/absence', icon: 'icon-star', badge: {variant: 'success', text: 'NEW'}},
      {name: 'Annuler rendez-vous', url: '/contact/rendezvous/annuler', icon: 'icon-star', badge: {variant: 'secondary', text: '4.7'}},
      {name: 'Annuler une réservation ', url: '/contact/rendezvous/reservation', icon: 'icon-star'},
    ]
  }
];
