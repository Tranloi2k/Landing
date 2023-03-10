import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {


  constructor(
    private router:Router,
  ) { }

  private data;

  setData(data){
    this.clearData();
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}
