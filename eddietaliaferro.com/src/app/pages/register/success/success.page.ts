import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  firstName: string;
  picture: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.picture = this.activatedRoute.snapshot.paramMap.get('picture');
  }

}
