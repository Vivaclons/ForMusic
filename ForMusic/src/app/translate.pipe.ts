import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  manic = 'рассказывает Зейн Лоу в интервью Apple Music,' + '\nрассказывает Зейн Лоу в интервью Apple Music,';
  transform(value: string, lan: string): string {
    if (lan === 'ru') {
      return ("рассказывает Зейн Лоу в интервью Apple Music," +
        "рассказывает Зейн Лоу в интервью Apple Music,");
    }
  }
}
