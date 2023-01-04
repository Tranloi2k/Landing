import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/service/productsServices/products.service';
import { SaveDataService } from 'src/app/service/saveData/save-data.service';


interface client {
  image: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 4
      },
      900: {
        items: 6
      }
    },
    nav: false
  };

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    autoHeight: false,
    navSpeed: 700,
    navText: ['', ''],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 2
      },
      1200: {
        items: 3
      }
    },
    nav: false
  };

  caseItems = [
    {
      image: "/assets/img/fire.png",
      name: "FIRE DETECTION AND WARNING",
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
    }
  ]


  clients_logo: client[] = [
    {
      image: "assets/images/client/denso.png"
    },
    {
      image: "assets/images/client/tp.png"
    },
    {
      image: "assets/images/client/ftel.png"
    },
    {
      image: "assets/images/client/amazon.svg"
    },
    {
      image: "assets/images/client/google.svg"
    },
    {
      image: "assets/images/client/lenovo.svg"
    },
  
    {
      image: "assets/images/client/spotify.svg"
    }
  ];



  /**
   * Member Data
   */
  memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
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

  fullNews = [
    {
      Name: "AISummit",
      NewId: 4,
      Link: "AISummit2" ,
      shortDescription:"8h sáng nay, tại Khách sạn Grand Plaza (Hà Nội), Ngày hội trí tuệ nhân tạo Việt Nam (AI4VN 2022) đã diễn ra với chủ đề “AI phục hồi kinh tế, định hình tương lai”. Tham gia chương trình có sự hiện diện của Phó Thủ tướng Chính phủ Vũ Đức Đam, Đại sứ Australia Andrew John Lech Goledzinowski, Bộ trưởng Bộ KHCN Huỳnh Thành Đạt, Bộ trưởng Bộ Kế hoạch - đầu tư Nguyễn Chí Dũng cùng đại diện các bộ ban ngành liên quan.",
      BannerImage: "assets/img/blog/blog-2.jpg",
      Title: "QAI tiếp đón Phó Thủ tướng tại AI Summit 2022",
      Author: "akaCam",
      TimeNew: "Dec 1, 2022",
      Content: "8h sáng nay, tại Khách sạn Grand Plaza (Hà Nội), Ngày hội trí tuệ nhân tạo Việt Nam (AI4VN 2022) đã diễn ra với chủ đề “AI phục hồi kinh tế, định hình tương lai”. Tham gia chương trình có sự hiện diện của Phó Thủ tướng Chính phủ Vũ Đức Đam, Đại sứ Australia Andrew John Lech Goledzinowski, Bộ trưởng Bộ KHCN Huỳnh Thành Đạt, Bộ trưởng Bộ Kế hoạch - đầu tư Nguyễn Chí Dũng cùng đại diện các bộ ban ngành liên quan.",
      Content2: "Chiều 1/12, hai sản phẩm sáng giá nhà QAI (akaCam, akaOCR) đã bước vào vòng Bán kết iKhiến 2022 cùng 4 đội thi từng đạt giải Vàng bảng A (sáng kiến về sản phẩm, dịch vụ). Kết quả được công bố ngay sau khi chương trình kết thúc. Theo đó, akaCam xuất sắc tiến thẳng vào Chung kết năm 2022 của cuộc thi iKhiến, tham gia vào chặng đua tranh giải Nhất năm trị giá 100 triệu đồng.",
      Image: "assets/img/blog/blog-2.jpg"
  }
  ,
  {
      Name: "hoi-nghi-Viet-Duc",
      NewId: 1,
      Link: "hoi-nghi-Viet-Duc" ,
      shortDescription:"Vào sáng ngày 21/11 vừa qua, tại Trung tâm Hội nghị tỉnh, UBND tỉnh Bình Định phối hợp với Phòng Công nghiệp và Thương mại Đức tại Việt Nam (AHK Việt Nam) tổ chức Hội nghị xúc tiến đầu tư các DN Đức tại tỉnh Bình Định. Đại diện FPT Software Quy Nhơn, đơn vị QAI đưa sản phẩm akaCam đến triển lãm và nhận được sự quan tâm đặc biệt của nhiều doanh nghiệp đến từ Đức, Israel,…",
      BannerImage: "assets/img/blog/blog-1.jpg",
      Title: "QAI đại diện FSOFT Quy Nhơn tham gia Hội nghị xúc tiến đầu tư Việt - Đức",
      Author: "akaCam",
      TimeNew: "Dec 1, 2022",
      Content: "Vào sáng ngày 21/11 vừa qua, tại Trung tâm Hội nghị tỉnh, UBND tỉnh Bình Định phối hợp với Phòng Công nghiệp và Thương mại Đức tại Việt Nam (AHK Việt Nam) tổ chức Hội nghị xúc tiến đầu tư các DN Đức tại tỉnh Bình Định. Đại diện FPT Software Quy Nhơn, đơn vị QAI đưa sản phẩm akaCam đến triển lãm và nhận được sự quan tâm đặc biệt của nhiều doanh nghiệp đến từ Đức, Israel,…",
      Content2: "Chiều 1/12, hai sản phẩm sáng giá nhà QAI (akaCam, akaOCR) đã bước vào vòng Bán kết iKhiến 2022 cùng 4 đội thi từng đạt giải Vàng bảng A (sáng kiến về sản phẩm, dịch vụ). Kết quả được công bố ngay sau khi chương trình kết thúc. Theo đó, akaCam xuất sắc tiến thẳng vào Chung kết năm 2022 của cuộc thi iKhiến, tham gia vào chặng đua tranh giải Nhất năm trị giá 100 triệu đồng.",
      Image: "assets/img/blog/blog-1.jpg"
  }
  ,
  {
      Name: "Chung ket ikhien",
      Link: "ckikhien" ,
      NewId: 2,
      shortDescription:"Chiều 1/12, hai sản phẩm sáng giá nhà QAI (akaCam, akaOCR) đã bước vào vòng Bán kết iKhiến 2022 cùng 4 đội thi từng đạt giải Vàng bảng A (sáng kiến về sản phẩm, dịch vụ). Kết quả được công bố ngay sau khi chương trình kết thúc. Theo đó, akaCam xuất sắc tiến thẳng vào Chung kết năm 2022 của cuộc thi iKhiến, tham gia vào chặng đua tranh giải Nhất năm trị giá 100 triệu đồng.",
      BannerImage: "assets/img/blog/Ck_Ikhien1.jpg ",
      Title: "akaCam tiến thẳng vào Chung kết năm iKhiến 2022",
      Author: "akaCam",
      TimeNew: "Dec 1, 2022",
      Content: "Chiều 1/12, hai sản phẩm sáng giá nhà QAI (akaCam, akaOCR) đã bước vào vòng Bán kết iKhiến 2022 cùng 4 đội thi từng đạt giải Vàng bảng A (sáng kiến về sản phẩm, dịch vụ). Kết quả được công bố ngay sau khi chương trình kết thúc. Theo đó, akaCam xuất sắc tiến thẳng vào Chung kết năm 2022 của cuộc thi iKhiến, tham gia vào chặng đua tranh giải Nhất năm trị giá 100 triệu đồng.",
      Content2: "Chiều 1/12, hai sản phẩm sáng giá nhà QAI (akaCam, akaOCR) đã bước vào vòng Bán kết iKhiến 2022 cùng 4 đội thi từng đạt giải Vàng bảng A (sáng kiến về sản phẩm, dịch vụ). Kết quả được công bố ngay sau khi chương trình kết thúc. Theo đó, akaCam xuất sắc tiến thẳng vào Chung kết năm 2022 của cuộc thi iKhiến, tham gia vào chặng đua tranh giải Nhất năm trị giá 100 triệu đồng.",
      Image: "assets/img/blog/Ck_Ikhien1.jpg "
  },
  
  ]


 
  //Get Year
  year = new Date().getFullYear()

  constructor(private modalService: NgbModal, private productService: ProductsService, private saveDataService: SaveDataService, private router: Router) {
   
  }

  products: any = []


  ngOnInit(): void {
    this.getPro()
  }

  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
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

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }

  goTo(link: string, newId) {
    var single = this.fullNews.filter((x) => x.NewId === newId);
    this.saveDataService.setData(newId)
    console.log("/news/" + link)
    this.router.navigate(["/news/" + link]);

  }
  
}
