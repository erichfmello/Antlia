import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = "";

  constructor(
    private http: HttpClient,
  ) {
    var self = this;

    self.start();
  }

  private start(): void {
    var self = this;

    self.baseUrl = "https://localhost:7112/";
  }

  public post<T1, T2>(request: T1, endpoint: string): Promise<T2> {
    var self = this;

    var url = self.baseUrl + endpoint;

    var headers: HttpHeaders = new HttpHeaders({
      'Cotent-Type': 'application/json'
    });

    const httpOptions = { headers: headers };

    return new Promise<T2>((resolve, reject) => {
      self.http.post(url, request, httpOptions)
        .toPromise()
        .then((response: any) => {
          resolve(response);
        }).catch((error: any) => {
          reject(error);
        });
    });
  }
}
