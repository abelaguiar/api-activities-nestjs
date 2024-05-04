import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export default class ActivitiesRequest {
  id: number;
  @IsString({ message: 'Nome tem que ser texto' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio.' })
  name: string;
  @IsEmail()
  @IsNotEmpty({ message: 'Email não pode ser vazio.' })
  email: string;
  @IsString({ message: 'Descrição tem que ser texto.', each: true })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio.' })
  description: string;
}
