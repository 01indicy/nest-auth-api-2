import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { plainToClass } from "class-transformer";

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((dto:any) => {
      return plainToClass(this.dto,dto,{
        excludeExtraneousValues: true
      })
    }));
  }
}
