
import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './header-service.service';
import { IHeader } from './header-model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'app works!';
  Header:IHeader ={"Counter":0,"AccountSerno":0,"CardSerno":0,"AccountNumber":"","CardNumber":null,"CustomerName":"","CustomerNumber":""}



  constructor(private headerService: HeaderServiceService, private route: ActivatedRoute) {
    
  
  
  }
  ngOnInit() {
    console.log(this.route.snapshot);
    
     var serno = this.route.snapshot.queryParams['FieldValue'];

    console.log("Parametr FieldValue " +  serno);

   this.headerService.getHeaderByAccount(serno).subscribe(header=> {
     this.Header = <IHeader>header;
       console.log("Nagłówkek: " + JSON.stringify(this.Header));
     });

 
   

}

}
