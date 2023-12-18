import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private api:ApiService){}
  data:any


  ngOnInit(){
    this.api.getData().subscribe((response:any)=>{
      this.data = response;
    }
    )
  }


  delete(id: any)
   {
    this.data = this.data.filter((e : {id:any})=> e.id !=id)
  }
}





