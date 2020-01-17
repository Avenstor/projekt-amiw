import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  city: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  save() {
    const location = {
      city: this.city,
    }
    localStorage.setItem('location', JSON.stringify(location));
    this.route.navigate(['home']);
  }

}
