import { Component, OnInit } from '@angular/core';
import{BitaService} from '../bita.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstname;
  lastname;
  email;
  phoneno;
  message;

  constructor(private us:BitaService) { }

  ngOnInit() {
  }
 addData(){
   this.us.addData(this.firstname,this.lastname,this.email,this.phoneno,this.message);
   console.log(this.firstname)
   
 }
}
