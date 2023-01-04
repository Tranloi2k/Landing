import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from 'src/app/service/newsService/news.service';
import { ProductsService } from 'src/app/service/productsServices/products.service';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private modalService: NgbModal,private saveDataService: SaveDataService) {
   
  }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }

  saveData(solution){
    this.saveDataService.setData(solution)
  }
  
 
}
