import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ajudante } from 'src/entities/ajudante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListAjudanteService {
    constructor(
        @InjectRepository(Ajudante)
        private ajudanteRepository: Repository<Ajudante>,
    ) {}

    async list(): Promise<Ajudante[]> {
        return this.ajudanteRepository.find();
    }
 }
