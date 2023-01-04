import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, Route } from '@angular/router';
import { combineLatest } from 'rxjs/internal/operators';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { NewdetalisComponent } from './core/news/newdetalis/newdetalis.component';
import { NewsComponent } from './core/news/news.component';
import { NotfoundpageComponent } from './core/notfoundpage/notfoundpage.component';
import { SolutionComponent } from './core/solution/solution.component';
import { NewsService } from './service/newsService/news.service';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
    // { path: "dxlunch", component: DxlunchComponent },
    { path: "home", component: HomeComponent },
    { path: "news", component: NewsComponent},
    { path: "contact", component: ContactComponent},
    { path: "about", component: AboutComponent},
    { path: "**", redirectTo: "error", pathMatch: "full" },
    { path: 'error', component: NotfoundpageComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private newService: NewsService) {
    this.loadRoutes()
  }

  products = [
    {
      link: 'ailab',
      name: 'DXLUNCH'
    },

    {
      link: 'dxlunch',
      name: 'DXLUNCH'
    }
  ]

  products2 = [{link: 'construction'},{link: 'manufacturing'},  {link: 'school'},{link: 'retail'},{link: 'canteen'},{link: 'offices'}]

 
  fullNews: any = []

  route: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    // { path: "dxlunch", component: DxlunchComponent },
    { path: "home", component: HomeComponent },
    { path: "news", component: NewsComponent },
    { path: "contact", component: ContactComponent},
    { path: "about", component: AboutComponent},
   
    
  ]

  async loadRoutes() {
    this.fullNews = await this.newService.getAllNews().toPromise();
    for (let product of this.products2) {
      var temp: Route[] = [{ path: 'solutions/' + product.link, component: SolutionComponent }];
      this.route = this.route.concat(temp)
    };
    for (let blog of this.fullNews) {
      var temp: Route[] = [{ path: 'news/' + blog.Link, component: NewdetalisComponent }];
      this.route = this.route.concat(temp)
    };
    var temp: Route[] = [ { path: "**", redirectTo: "error", pathMatch: "full" },
    { path: 'error', component: NotfoundpageComponent }]
    this.route = this.route.concat(temp)
    console.log(this.route)

    //adding routes to existing to configuration.
    this.router.resetConfig(this.route);
  }
}


