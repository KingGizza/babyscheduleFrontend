import { Component, OnInit } from '@angular/core';
import { DaydescriptionService } from '../daydescription.service';
import { Daydescription } from '../daydescription';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  descriptionList:Daydescription[];

  constructor(private daydescriptionService: DaydescriptionService) { }

  ngOnInit() {
  }

  findAll() {
    return this.daydescriptionService.findAll().subscribe(descriptionList => this.descriptionList = descriptionList);
  }
}
