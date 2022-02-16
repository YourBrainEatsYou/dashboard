import { UserFacadeService } from "@/store/user/user-facade.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$ = this.userFacadeService.user$;

  constructor(
    private userFacadeService: UserFacadeService
  ) {
  }

}
