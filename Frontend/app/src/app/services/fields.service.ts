import { Injectable } from '@angular/core';
import { FieldsListRequest, FieldsListResponse } from 'src/models/types';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor(
    private baseService: BaseService,
  ) { 

  }

  public List(request: FieldsListRequest): Promise<FieldsListResponse>{
    var self = this;
    
    return new Promise<FieldsListResponse>((resolve, reject) => {
      self.baseService.post(request, 'v1/Fields/List')
        .then((response: any) => {
          resolve(response);
        }).catch((error: any) => {
          reject(error);
        });
    });
  }
}
