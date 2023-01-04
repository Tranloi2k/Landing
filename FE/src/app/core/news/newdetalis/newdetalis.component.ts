import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewsService } from 'src/app/service/newsService/news.service';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';

@Component({
  selector: 'app-newdetalis',
  templateUrl: './newdetalis.component.html',
  styleUrls: ['./newdetalis.component.css']
})
export class NewdetalisComponent implements OnInit {

  safeHtml: SafeHtml;
  singleNew: any;
  style: string;
  navClass = 'nav-light'
  fullNews: any = []


  constructor(private saveDataService: SaveDataService, private sanitizer: DomSanitizer, private newService: NewsService) {

  }


  ngOnInit(): void {
    this.getNews()

  }

  getNews() {
    this.newService.getAllNews().subscribe((res: any) => {
      console.log(res)
      this.fullNews = res
      const name = this.saveDataService.getData()
      console.log(name)
      this.singleNew = this.fullNews.filter((x) => x.NewId === name)[0];

      this.style = "background: url(" + this.singleNew.BannerImage + ") center center;"
      const s = this.singleNew.Content
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(s)
    });
  }



}
