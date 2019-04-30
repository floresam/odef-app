import { Component, OnInit } from '@angular/core';
import { Odef } from '../odef';
import { ODEFS } from '../mock-odef';
import { OdefService } from '../odef.service';

@Component({
  selector: 'app-odef',
  templateUrl: './odef.component.html',
  styleUrls: ['./odef.component.css']
})
export class OdefComponent implements OnInit {
  odefs: Odef[];
  selectedOdef: Odef;
  onSelect(odef: Odef): void {
    this.selectedOdef = odef;
  }
  
  getOdefs(): void {
    this.odefService.getOdefs()
        .subscribe(odefs => this.odefs = odefs);
  }

  constructor(private odefService: OdefService) { }

  ngOnInit() {
    this.getOdefs();
  }

}
