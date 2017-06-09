import { Component, Input } from '@angular/core';

@Component({
  selector: 'ef-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent  {

    @Input() message: string;

}
