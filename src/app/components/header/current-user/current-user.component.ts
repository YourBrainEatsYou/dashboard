import { UserPayload } from "@/interfaces/payload/user-payload";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent {
  @Input() user: UserPayload | null = null;
}
