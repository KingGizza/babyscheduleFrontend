import { Component, OnInit } from '@angular/core';
import { Daydescription } from '../daydescription';
import { DaydescriptionService } from '../daydescription.service';
import { ActivatedRoute } from '@angular/router';
import { Nap } from '../nap';
import { Time } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daydescription',
  templateUrl: './daydescription.component.html',
  styleUrls: ['./daydescription.component.css']
})
export class DaydescriptionComponent implements OnInit {
  napId: number
  descriptionid:number;
  daydescription = new Daydescription;
  descriptionList: Daydescription[];
  napStart: Time;
  napEnd: Time;
  constructor(private daydescriptionService: DaydescriptionService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.findAll();
    this.route.paramMap.subscribe(params => {this.descriptionid = parseInt(params.get("id"));});
    this.findDescription(this.descriptionid)
    
    
  }

  save() {
    this.daydescriptionService.save(this.daydescription).subscribe(() => this.findAll());
  }

  findAll() {
    return this.daydescriptionService.findAll().subscribe(descriptionList => this.descriptionList = descriptionList);
  }

  delete(daydescription: Daydescription) {
    this.daydescriptionService.delete(daydescription.id).subscribe(() => this.findAll());
  }
  setDay(daydescription: Daydescription) {
    this.daydescription = daydescription;
  }
  findDescription(id: number) {
    this.daydescriptionService.findById(id).subscribe(description => this.daydescription = description)
    return this.daydescription;
  }
  update(daydescription){
    this.daydescriptionService.update(this.daydescription).subscribe((daydescription) => this.goToDay(daydescription));
  }

  addNap(){
    this.daydescription.naps[this.daydescription.naps.length] = new Nap(this.napStart);
    console.log(this.napEnd);
    this.daydescription.naps[this.daydescription.naps.length-1].end=this.napEnd;
    this.daydescription
  }
  goToDay(daydescription) {
    this.router.navigate([`/detail/${daydescription.id}`])
  }

  changeNap(){
    console.log(this.napStart)
    console.log(this.napId)
    for(let nap of this.daydescription.naps){
      if(nap.napId===this.napId){ 
      nap.start = this.napStart;
      nap.end = this.napEnd;}
      this.update(this.daydescription);}
  }

  setNapId(id: number){
    this.napId=id;
  }






}
