import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { userSignInDto } from "./user-singin.dto";

export class UserSignUpDto extends userSignInDto
{
  @IsNotEmpty({message:'Name can not be null'})
 @IsString({message:'Namw should be string'})
  name:string;

}