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
      path: '/dashboard/my'
    },
    {
      name: 'Seatplan',
      path: '/dashboard/seatplan'
    },
    {
      name: 'Ticket',
      path: '/dashboard/ticket'
    }
  ];
}
