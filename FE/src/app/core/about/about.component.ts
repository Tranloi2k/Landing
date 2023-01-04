import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from 'src/app/service/newsService/news.service';
import { ProductsService } from 'src/app/service/productsServices/products.service';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  featuresdata = [
    {
      icon: "monitor",
      title: "Fully Responsive"
    },
    {
      icon: "heart",
      title: "Browser Compatibility"
    },
    {
      icon: "eye",
      title: "Retina Ready"
    },
    {
      icon: "bold",
      title: "Based On Bootstrap 5"
    },
    {
      icon: "feather",
      title: "Feather Icons"
    },
    {
      icon: "code",
      title: "Built With SASS"
    },
    {
      icon: "user-check",
      title: "W3c Valid Code"
    },
    {
      icon: "git-merge",
      title: "Flaticon Icons"
    },
    {
      icon: "settings",
      title: "Easy to customize"
    }
  ];

  constructor(private modalService: NgbModal, private productService: ProductsService, private newService: NewsService,
    private saveDataService: SaveDataService) {
     
     }

  ngOnInit(): void {
  }

  memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }
  ];


  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
