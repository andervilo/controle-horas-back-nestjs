import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'ajudante'})
export class Ajudante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @Column()
    valorDiaria: number;

    @Column()
    valorHoraExtra: number;
}