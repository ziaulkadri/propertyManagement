import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class HeadersDto {
    @IsString()
    @Expose({ name: 'access-token' })
    // Remove @Type(() => string) - it's unnecessary and causing the crash
    accessToken: string;
}