# phpcrudapi-ng2-service 

This Angular 2 package is suppose to be a service that consumes the: [php-crud-api](https://github.com/mevdschee/php-crud-api) web service.

# Installation 

To install it in your Angular 2 web application just issue the following command from you Angular 2 application:
{npm install --save phpcrudapi-ng2-service }


# Usage 


To use it inject the servide in your Component like so:

```
import {PhpCrudApiService} from 'phpcrudapi-ng2-service/phpcrudapiservice';
export class MyComponent{

        construnctor(private _crud:PhpCrudApiService){}


        method(){
            this._crud.get("orders", "[php-crud-api parameters for the get request]").subscribe(res=>{
                this.result=res.items;
            });
            ...
            this._crud.put("[tablename]",jsonObj:any).subscribe(res=>{
                ...
            });
            this._crud.post("[tablename]",jsonObj:any).subscribe(res=>{
                ...
            });
            this._crud.delete("[tablename]",id:any).subscribe(res=>{
                ...
            });
        }
}
```