import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private ar: ActivatedRoute,
    private hc: HttpClient) {
    ar.queryParams.subscribe(q => {
      const { hl = 'en' } = q;
      this.hc.get(`${env.dataHost}/${hl}/hall.json`).subscribe((e: any) => {
        Object.assign(this, e);
        this.hero = `url(${env.dataHost + e.hero})`;
      });
    });
  }
}
