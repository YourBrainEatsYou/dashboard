import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  navigation = [
    {
      name: 'Dashboard',
      path: '/dashboard'
    },
    {
      name: 'Seatplan',
      path: '/seatplan'
    },
    {
      name: 'Ticket',
      path: '/ticket'
    }
  ];
}
