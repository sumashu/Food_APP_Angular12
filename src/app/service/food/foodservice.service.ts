import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getAll():Foods[]
  {
    return[
     {
        id:1,
        price:90,
        name:'vegetable burger',
        cookTime:'20-30',
        favorite:true,
        star:4.0,
        tags:['fastfoo','lunch','burger'],
        imageUrl:'/assets/images/burger.jpg',
        origins:['itely'],
     },
     {
        id:2,
        price:90,
        name:'vegetable loaded burger',
        cookTime:'20-30',
        favorite:false,
        star:4.5,
        tags:['fastfoo','lunch','loaded burger'],
        imageUrl:'/assets/images/burger-2.jpg',
        origins:['itely'],
     },
     {
        id:3,
        price:90,
        name:'vegetable burger pizza lunch  ',
        cookTime:'20-30',
        favorite:true,
        star:3.0,
        tags:['fastfoo','lunch','pizza'],
        imageUrl:'/assets/images/burger-3.jpg',
        origins:['itely'],
     },
     {
        id:4,
        price:90,
        name:'vegetable Pizza',
        cookTime:'10-15',
        favorite:true,
        star:3.0,
        tags:['fastfoo','lunch','pizza'],
        imageUrl:'/assets/images/burger.jpg',
        origins:['itely'],
     },
     {
        id:5,
        price:90,
        name:'vegetable Pizza',
        cookTime:'20-30',
        favorite:false,
        star:2.0,
        tags:['fastfoo','lunch','pizza'],
        imageUrl:'/assets/images/burger-2.jpg',
        origins:['itely'],
     },
     {
        id:6,
        price:90,
        name:'vegetable Pizza',
        cookTime:'20-30',
        favorite:true,
        star:4.0,
        tags:['fastfoo','lunch','pizza'],
        imageUrl:'/assets/images/burger-3.jpg',
        origins:['indian'],
     },
     {
        id:7,
        price:290,
        name:'chicken Pizza',
        cookTime:'20-30',
        favorite:true,
        star:5.0,
        tags:['fastfoo','lunch','pizza'],
        imageUrl:'/assets/images/burger-3.jpg',
        origins:['indian'],
     },
     {
        id:8,
        price:390,
        name:'mutton Pizza',
        cookTime:'20-30',
        favorite:true,
        star:5.0,
        tags:['fastfoo','lunch','pizza'],
        imageUrl:'/assets/images/burger-3.jpg',
        origins:['indian'],
     },


    ]
  }
}
