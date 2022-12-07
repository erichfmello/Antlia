//#region Base
export class BaseRequest {
}

export class BaseSaveRequest<T> extends BaseRequest {
    public item: T | undefined;
}

export class BaseResponse {
    public message: string | undefined;
    public erroMessage: string | undefined;
    public succsess: boolean | undefined;
}

export class BaseItemResponse<T> extends BaseResponse {
    public item: T | undefined;
}

export class BaseListResponse<T> extends BaseResponse {
    public items: Array<T> = [];
}
//#endregion Base

//#region Fields
export class FieldsListRequest extends BaseRequest {
}

export class FieldsListResponse extends BaseItemResponse<Fields>    {
}

export class Fields {
    public products: Array<Product> | undefined;
    public productCosifs: Array<ProductCosif> | undefined;
}

export class Product {
    public productCod: string | undefined;
    public productDescription: string | undefined;
}

export class ProductCosif {
    public productCod: string | undefined;
    public cosifCod: string | undefined;
}
//#endregion Fields

//#region Movementation
export class MovimentationListRequest extends BaseRequest {
}

export class MovimentationListResponse extends BaseListResponse<Movimentation> {
}

export class MovimentationSaveRequest extends BaseSaveRequest<Movimentation> {
}

export class MovimentationSaveResponse extends BaseListResponse<Movimentation> {
}

export class Movimentation {
    public month: number | undefined;
    public year: number | undefined;
    public productCod: string | undefined;
    public cosifCod: string | undefined;
    public productDescription: string | undefined;
    public releaseNumber: number | undefined;
    public releaseDescription: string | undefined;
    public value: number | undefined;
}

//#endregion Movementation
