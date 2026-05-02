import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodType } from "zod";


export class ZodValidationPipe  implements PipeTransform {

    constructor(private schema: ZodType<any>){}

   transform(value: any, metadata: ArgumentMetadata) {
       
         const result = this.schema.safeParse(value);
            if(result.success) return result.data; 
                
                
                
            throw new BadRequestException(result.error.format());
            
            
        
       
   }
}