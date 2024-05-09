import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ajudante } from 'src/entities/ajudante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateAjudanteService {
    constructor(
        @InjectRepository(Ajudante)
        private ajudanteRepository: Repository<Ajudante>,
    ) {}

    async create(ajudante: Ajudante): Promise<Ajudante> {
        return this.ajudanteRepository.save(ajudante);
    }
}
