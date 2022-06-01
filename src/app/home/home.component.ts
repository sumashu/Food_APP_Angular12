import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../service/food/foodservice.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   foods:Foods[] = [];
  constructor(private fs:FoodserviceService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }

}
