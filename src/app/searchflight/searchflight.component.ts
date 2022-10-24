import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  constructor(private flightserv:FlightService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  search(flightNo:any){
    // this.http.get("http://localhost:9099/getflight/"+flightNo).subscribe((data)=>this.flight=data);

  }

}
