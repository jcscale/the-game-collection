import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
        setHeaders: {
            'X-RapidAPI-Key': '11e8da7cefmsh8a320e02dd3afdfp154487jsn64235d80b788',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
            key: 'c5d232581d0342a5882e5ea80edaf0cf'
        }
    });
    return next.handle(req)
}
}