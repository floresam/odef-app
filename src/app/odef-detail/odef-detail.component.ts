import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Odef } from '../odef';
import { OdefService } from '../odef.service';


@Component({
  selector: 'app-odef-detail',
  templateUrl: './odef-detail.component.html',
  styleUrls: ['./odef-detail.component.css']
})
export class OdefDetailComponent implements OnInit {
  @Input() odef: Odef;

  constructor(
    private route: ActivatedRoute,
    private odefService: OdefService,
    private location: Location
  ) { }

  getOdef(id, type): void {
    //const id = this.route.snapshot.paramMap.get('id').toString() + "";
    //const type = this.route.snapshot.paramMap.get('type').toString() + "";
    this.odefService.getOdef(id,type)
        .subscribe(odef => this.odef = odef);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'].toString() + "";
      const type = params['type'].toString() + "";
      console.log(id + ":" + type);
      this.getOdef(id, type);
    });
  }
  
  isProperty(type) { 
    return(type === "property");
  }

}
