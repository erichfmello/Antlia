import { Injectable } from '@angular/core';
import { MovimentationListRequest, MovimentationListResponse, MovimentationSaveRequest, MovimentationSaveResponse } from 'src/models/types';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class MovementationService {

  constructor(
    private baseService: BaseService,
  ) { }

  public List(request: MovimentationListRequest): Promise<MovimentationListResponse>{
    var self = this;
    
    return new Promise<MovimentationListResponse>((resolve, reject) => {
      self.baseService.post(request, 'v1/Movimentation/List')
        .then((response: any) => {
          resolve(response);
        }).catch((error: any) => {
          reject(error);
        });
    });
  }

  public Save(request: MovimentationSaveRequest): Promise<MovimentationSaveResponse>{
    var self = this;
    
    return new Promise<MovimentationSaveResponse>((resolve, reject) => {
      self.baseService.post(request, 'v1/Movimentation/Save')
        .then((response: any) => {
          resolve(response);
        }).catch((error: any) => {
          reject(error);
        });
    });
  }
}
