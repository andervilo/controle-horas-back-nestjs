import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ajudante } from 'src/entities/ajudante.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class DeleteAjudanteService {
    constructor(
        @InjectRepository(Ajudante)
        private ajudanteRepository: Repository<Ajudante>,
    ) {}

    async delete(id: number): Promise<DeleteResult> {
        return this.ajudanteRepository.delete(id);
    }
}
