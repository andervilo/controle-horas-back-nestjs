import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ajudante } from 'src/entities/ajudante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateAjudanteService {

    constructor(
        @InjectRepository(Ajudante)
        private ajudanteRepository: Repository<Ajudante>,
    ) {}

    async update(id: number, ajudante: Ajudante): Promise<Ajudante> {
        await this.ajudanteRepository.update(id, ajudante);
        return this.ajudanteRepository.findOne({ where: { id}});
    }
 }
