import { Component, EventEmitter, Output, Input } from "@angular/core";
import { SitesService } from "./sites.service";
import { Site } from './site';

@Component({
  selector: 'site-selector',
  templateUrl: './site-selector.html'
})

export class SiteSelector {
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Input() sites: Site[];
  errorMessage: string;

  constructor() {

  }

  //onNewSub(): void {
  //    console.log('onNewSub');
  //    this.newSub.emit('');
  //}


}
