import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/newsService/news.service';
import { ProductsService } from 'src/app/service/productsServices/products.service';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  fullNews: any = []
  indexPage = [];
  products: any = []
 

  constructor(private router: Router,
 
    private productService: ProductsService,
    private newService: NewsService,
    private saveDataService: SaveDataService
  ) {
   
  }

  ngOnInit(): void {
    this.initPage()
    this.getPro()
  }

  goTo(link: string, newId) {
    var single = this.fullNews.filter((x) => x.NewId === newId);
    this.saveDataService.setData(newId)
    this.router.navigate(["/" + link]);

  }

  

 

  getNews() {
    this.newService.getAllNews().subscribe((res: any) => {
      console.log(res)
      this.fullNews = res
      if (res.success) {
        console.log(res);
        this.fullNews = res
        return res
      }

    });
  }

  getPro() {
    this.productService.getAllProduct().subscribe((res: any) => {
      console.log(res)
      this.products = res
      var a = res[0].ServiceTitles
      a = a.replace(/'/g, '"');
      console.log(JSON.parse(a))
    });
  }



  currentPage: number
  maxNumberPage: number
  news = []

  isCondensed = false;

  buttonList: boolean = false;
  sliderTopbar: boolean = false;
  isdeveloper: boolean = false;
  shopPages: boolean = false;
  navClass = 'nav-dark'
  hideFooter: boolean = false;



  pagination(page) {


    this.currentPage = page + 1
    if (page) {
      if (page >= this.maxNumberPage) {
        this.currentPage = page
        console.log(this.currentPage)
      }
      else if (page < 0) {
        this.currentPage = page + 2
        console.log(this.currentPage)
      }
      else {
        this.news = []

        if ((page + 1) == this.maxNumberPage) {
          const numberNews = this.fullNews.length
          var indexNew = []
          if (numberNews % 3 != 0) {
            for (let i = 0; i < (numberNews - (page) * 3); i++) {
              indexNew.push(page * 3 + i)
              console.log(indexNew)
            }

          }
          else {
            indexNew = [page * 3 + 1, page * 3 + 2, page * 3 + 3]
            console.log(indexNew)
          }
        }
        else {
          indexNew = [page * 3 + 1, page * 3 + 2, page * 3 + 3]
          console.log(indexNew)
        }
        for (let id of indexNew) {
          this.news.push(this.fullNews[id])
        }
      }


    }
    else {
      this.news = [this.fullNews[0], this.fullNews[1], this.fullNews[2]]
    }
    console.log(this.news)

  }



  maxNumberPages() {
    const numberNews = this.fullNews.length;
    if (numberNews % 3 != 0) {
      this.maxNumberPage = Math.floor(numberNews / 3) + 1
    }
    else {
      this.maxNumberPage = numberNews / 3
    }
    console.log(this.maxNumberPage)
    for (let i = 0; i < this.maxNumberPage; i++) {
      this.indexPage.push(i + 1)
    }
    return this.maxNumberPage
  }


  initPage() {
    this.newService.getAllNews().subscribe((res: any) => {
      console.log(res)
      this.fullNews = res
      this.maxNumberPages()
      this.pagination(0)

    });

  }





}
