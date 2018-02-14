import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Categorie } from '../shared/model/categorie';

@Injectable()
export class CategorieService{

  constructor(
    http: HttpClient
  ){
  }

}
