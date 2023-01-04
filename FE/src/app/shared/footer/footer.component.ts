import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  hideFooter: boolean = false;
  products2 = [{Name: 'Construction',
  Link: '/solutions/construction'},
  {Name: 'Manufacturing',
  Link: '/solutions/manufacturing'},  
  {Name: 'School',
  Link: '/solutions/school'},
  {Name: 'Retail',
  Link: '/solutions/retail'},
  {Name: 'Canteen',
  Link: '/solutions/canteen'},
  {Name: 'Offices',
  Link: '/solutions/offices'}]

 
  constructor() { }

  ngOnInit(): void {
  }



}
