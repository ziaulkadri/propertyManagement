import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";




@Injectable() // marking this class as injectable so that it can be used as a provider out side the module
export class ParseIdPipe implements PipeTransform<string, number> {

    transform(value: string, metadata: ArgumentMetadata): number {
      const val = parseInt(value, 10);
      
      

      if(isNaN(val)){
        throw new BadRequestException('id must be a number');
      }
      if(val <= 0){
        throw new BadRequestException('id must be a positive number');
      }
      return val;
    }


}