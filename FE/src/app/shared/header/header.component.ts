import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/service/productsServices/products.service';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navClass: string;
  buttonList: boolean = false;
  sliderTopbar: boolean = false;
  isdeveloper: boolean = false;
  shopPages: boolean = false;
  hideFooter: boolean = false;


  //Get Year
  year = new Date().getFullYear()

  constructor(private router: Router, private modalService: NgbModal, private productService: ProductsService, private saveDataService: SaveDataService) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  products: any = []
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

  isCondensed = false;


  ngOnInit(): void {
    this.getPro()
  }
  saveData(name){
    this.saveDataService.setData(name)
  }


  getPro(){
    this.productService.getAllProduct().subscribe((res: any) => {
      console.log(res)
      this.products = res
      var a = res[0].ServiceTitles
      a = a.replace(/'/g, '"');
        console.log(JSON.parse(a))
    });
  }


  _activateMenuDropdown() {
    /**
     * Menu activation reset
     */
    const resetParent = (el) => {
      el.classList.remove("active");
      const parent = el.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.remove("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.remove("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.remove("active");

            }
          }
        }
      }
    };
    let links = document.getElementsByClassName("nav-link-ref");
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i]["pathname"]) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");

              document.getElementById("navigation").style.display = "none";
              this.isCondensed = false;
            }
          }
        }
      }
    }
  }


  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
  }

  onMenuClick(event) {
    event.preventDefault();
    const nextEl = event.target.nextSibling.nextSibling;
    if (nextEl && !nextEl.classList.contains("open")) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove("open");
      }
      nextEl.classList.add("open");
    } else if (nextEl) {
      nextEl.classList.remove("open");
    }
    return false;
  }

  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }

  wishListModal(content) {
    this.modalService.open(content, { centered: true });
  }

  
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
