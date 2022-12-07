import { Component, OnInit } from '@angular/core';
import { MovementationService } from 'src/app/services/movementation.service';
import { Movimentation, MovimentationListRequest, MovimentationListResponse } from 'src/models/types';
import { library } from 'src/models/library';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.less']
})
export class MovementListComponent implements OnInit {
  public movimentations: Array<Movimentation> | undefined;

  ngOnInit(): void {
  }

  constructor(
    private movimantationService: MovementationService,
  ) {
    var self = this;

    self.start();
  }

  public start(): void {
    var self = this;

    var request: MovimentationListRequest = new MovimentationListRequest();

    self.movimantationService.List(request)
      .then((response: MovimentationListResponse) => {
        if (!response.succsess)
          return;

        self.movimentations = response.items;
      }).catch((error: MovimentationListResponse) => {
      }).finally(() => {
      });
  }

  public FormaMoney(value: number | undefined): string {
    if (value == undefined)
      return '';

    return new library().formatMoney(value.toString());
  }
}
