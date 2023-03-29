import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-activitats',
  templateUrl: './activitats.component.html',
  styleUrls: ['./activitats.component.css']
})
export class ActivitatsComponent {
  constructor(private http: HttpClient) {
    this.http.post("http://localhost:3080/api/ex1",{}).subscribe();
  }
}
