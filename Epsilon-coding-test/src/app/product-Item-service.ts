import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductItem } from './productItem';

@Injectable()
export class ProductItemService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/product-item.json')
            .toPromise()
            .then(res => <ProductItem[]>res.cookies)
            .then(data => { return data; });
    }

}