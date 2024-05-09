import { ApiProperty } from "@nestjs/swagger";

export class Ajudante {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    cpf: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    valorDiaria: number;

    @ApiProperty()
    valorHoraExtra: number;
}