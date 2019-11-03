import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semicolonlist'
})
export class SemicolonlistPipe implements PipeTransform {

  transform(txt: any): any {
    let lines = txt.split(";");
    
    lines = lines.map((e) => "<li>"+e+"</li>");
    let line = "<ul>" + lines.join("") + "</ul>";

    return line;
  }

}
