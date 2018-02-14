import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Site } from './../shared/model/site';
import { Categorie } from '../shared/model/categorie';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';

@Injectable()
export class SiteService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
  ){
  }

}