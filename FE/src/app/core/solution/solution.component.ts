import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  singleNew: any;
  style: string;

  Option: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

 
    featuresdata = [
    {
      icon: "smile",
      title: "Increase Customer Satisfaction"
    },
    {
      icon: "shield",
      title: "Prevent Loss Of Goods"
    },
    {
      icon: "eye",
      title: "Easily Track Employee Behavior"
    },
    {
      icon: "archive",
      title: "Optimizing Commercial Area"
    },
    {
      icon: "dollar-sign", 
      title: "Increased Profitability"
    },
    {
      icon: "thumbs-up",
      title: "Higher Customer Retention"
    }
  ];


  caseItems = [
    {
      image: "/assets/img/fire.png",
      name: "Fire Detection and Warning",
      customers: "Customer: Factories, warehouses, and parking lots...",
      details: ["24/7 automated smoke, fire detection and early warning monitoring", "Immediate alerts on multi-channels"]
    },
    {
      image: "/assets/img/Access.svg",
      name: "ACCESS CONTROL",
      customers: "Customer: Building, Office",
      details: ["Streamline Check in process with support for thousand of guests daily", "Synchronize up to millions of registered guests from any system", "Integrate with other systems such as timekeeping and HR"]
    },
    {
      image: "/assets/img/Warehouse.svg",
      name: "WAREHOUSE SURVEILLANCE",
      customers: "Customer: E-commerce, Logistic",
      details: ["Automated monitoring 24/7 for fire, and electrical accidents", "Monitor people and vehicles. Detect and alert any suspicious activity", "Centralized and remote management keeps Stakeholders informed"]
    },
  ]

  Title: string;
  
  allSolutions = [
    {Title: "Retail",
    Quote1: "Great features to help improve your business",
    Quote2: "akaCam gives retailers the power to dramatically reduce costs, improve safety, reduce shrinkage, and drive profitability."
      }
  ]

  solution: any;
  constructor( private saveDataService: SaveDataService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    const name = this.saveDataService.getData()
    this.solution = this.allSolutions.filter((x) => x.Title === name)[0]; 
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
}
