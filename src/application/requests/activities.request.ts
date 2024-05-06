import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export default class ActivitiesRequest {
  @IsString({ message: 'Nome tem que ser texto' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio.' })
  @Expose({ name: 'name' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email não pode ser vazio.' })
  @Expose({ name: 'email' })
  email: string;

  @IsString({ message: 'Descrição tem que ser texto.', each: true })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio.' })
  @Expose({ name: 'description' })
  description: string;
}
