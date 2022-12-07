import { Component, OnInit } from '@angular/core';
import { FieldsService } from 'src/app/services/fields.service';
import { MovementationService } from 'src/app/services/movementation.service';
import { library } from 'src/models/library';
import { Fields, FieldsListRequest, FieldsListResponse, Movimentation, MovimentationSaveRequest, MovimentationSaveResponse } from 'src/models/types';

@Component({
  selector: 'app-movement-modal',
  templateUrl: './movement-modal.component.html',
  styleUrls: ['./movement-modal.component.less']
})
export class MovementModalComponent implements OnInit {
  public btnNewText: string = 'Novo';

  public testString: string = 'ola mundo';
  public moviment: Movimentation = new Movimentation();
  public fields: Fields = new Fields();

  public productBox: string = '';
  public cosif: string = '';
  private IsNew: boolean = false;

  ngOnInit(): void {
  }

  constructor(
    private fieldsService: FieldsService,
    private movementationService: MovementationService,
  ) {
    var self = this;

    self.start();
  }

  private start(): void {
    var self = this;

    var request: FieldsListRequest = new FieldsListRequest();

    self.fieldsService.List(request)
      .then((response: FieldsListResponse) => {
        if (!response.succsess)
          return;

        self.fields.products = response.item?.products;
        self.fields.productCosifs = response.item?.productCosifs;
      }).catch((error: FieldsListResponse) => {
      }).finally(() => {
      });
  }

  public clear(): void {
    var self = this;

    self.moviment = new Movimentation();
  }

  public change(): void {
    var self = this;

    var el = document.querySelectorAll('.Input');

    for (let i = 0; i < el.length; i++) {
      const element = <HTMLInputElement>el[i];
      element.disabled = self.IsNew;
    }


    if (self.IsNew)
      self.btnNewText = 'Novo';
    else
      self.btnNewText = 'Cancelar';

    self.clear();
  }

  public addMoviment(): void {
    var self = this;

    if (new library().isEmpityString(self.moviment.releaseDescription))
      return;

    var request: MovimentationSaveRequest = new MovimentationSaveRequest();
    request.item = self.moviment;
    request.item.productCod = self.fields.products?.filter(obj => obj.productDescription == self.productBox)[0]?.productCod;
    request.item.cosifCod = self.cosif.split(' ')[4];

    self.movementationService.Save(request)
      .then((response: MovimentationSaveResponse) => {
        if (!response.succsess)
          return;

        window.location.reload();
      }).catch((error: MovimentationSaveResponse) => {
      }).finally(() => {
      });
  }
}
