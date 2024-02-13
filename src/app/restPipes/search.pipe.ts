import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 // data to transform , data  used for transformation, searching  applying key in input data

 transform(DataArray:any[],serachString:string,searchKey:string): any {

  const result:any=[]

  if(!DataArray || !serachString || !searchKey) {

    return DataArray;

  }
  else{

    DataArray.forEach((item:any)=>{
      if(item.title.trim().toLowerCase().includes(serachString.trim().toLowerCase()))
      {
        result.push(item)
      }
    })
      return result
  }
}


}
