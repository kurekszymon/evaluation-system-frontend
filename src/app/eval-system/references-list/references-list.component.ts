import { Component, Input } from '@angular/core';
import { Reference } from 'src/app/shared/interfaces/backend-response.interface';

@Component({
  selector: 'krk-references-list',
  templateUrl: './references-list.component.html',
  styleUrls: ['./references-list.component.scss'],
})
export class ReferencesListComponent {
  @Input()
  public references!: Reference[] | null;
}
