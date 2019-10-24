import { Component, OnInit } from '@angular/core';
import { Daydescription } from '../daydescription';
import { DaydescriptionService } from '../daydescription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.css']
})
export class NewDayComponent implements OnInit {

  daydescription = new Daydescription;
  constructor(private daydescriptionService: DaydescriptionService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.daydescriptionService.save(this.daydescription).subscribe((daydescription) => this.goToDay(daydescription));
  }
  goToDay(daydescription) {
    this.router.navigate([`/detail/${daydescription.id}`])
  }

}
