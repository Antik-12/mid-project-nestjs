import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class userSignInDto
{
  
    @IsNotEmpty({message:'email can not be emapty'})
    @IsEmail({},{message:'please provide a valid email.'})
    email:string;
  
    @IsNotEmpty({message:'Password can not be empty'})
    @MinLength(5,{message:'password minimum character shuld be 5.'})
    password:string
}