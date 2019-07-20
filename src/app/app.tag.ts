import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.tag.html',
  styleUrls: ['./app.tag.sass']
})
export class AppTag {
  title = 'title';
  phone = '';
  email = '';
  brand = '';
  slogan = '';
  hero = '';
  constructor(private hc: HttpClient) {
    this.hc.get(`${env.dataHost}/hall.json`).subscribe((e: any) => {
      Object.assign(this, e);
      this.hero = `url(${env.dataHost + e.hero})`;
    });
  }
}
