import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
  //   modify uppercase pipe accordingly for example
  // @Injectable()
  // export class UppercasePipe implements PipeTransform {
  //   transform(value: any, metadata: ArgumentMetadata) {
  //     if (typeof value === 'string') {
  //       return value.toUpperCase();
  //     }

  //     if (typeof value === 'object' && value !== null) {
  //       const transformed: any = {};
  //       for (const key in value) {
  //         if (typeof value[key] === 'string') {
  //           transformed[key] = value[key].toUpperCase();
  //         } else {
  //           transformed[key] = value[key];
  //         }
  //       }
  //       return transformed;
  //     }

  //     return value;
  //   }
  // }
}
