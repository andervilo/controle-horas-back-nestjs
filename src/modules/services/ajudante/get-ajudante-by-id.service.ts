import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ajudante } from 'src/entities/ajudante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAjudanteByIdService { 

    constructor(
        @InjectRepository(Ajudante)
        private ajudanteRepository: Repository<Ajudante>,
    ) {}

    async getById(id: number): Promise<Ajudante> {
        return this.ajudanteRepository.findOne({ where: { id }});
    }
}
