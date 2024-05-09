
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Ajudante } from 'src/dto/ajudante/ajudante.dto';
import { Ajudante as AjudanteEntity } from 'src/entities/ajudante.entity';
import { CreateAjudanteService } from 'src/modules/services/ajudante/create-ajudante.service';

@Controller("api/v1/ajudantes")
export class CreateAjudanteController {

    constructor(
        private readonly createAjudante: CreateAjudanteService,
    ) {}

    @ApiTags('Ajudantes')
    @Post()
    @ApiBody({
        description: 'Create a new ajudante',
        type: Ajudante,
      })
    async create(@Body() ajudanteDto: Ajudante): Promise<Ajudante> {
        let ajudante = new AjudanteEntity();
        ajudante.nome = ajudanteDto.nome;
        ajudante.cpf = ajudanteDto.cpf;
        ajudante.telefone = ajudanteDto.telefone;
        ajudante.valorDiaria = ajudanteDto.valorDiaria;
        ajudante.valorHoraExtra = ajudanteDto.valorHoraExtra;

        let ajdResponse = await this.createAjudante.create(ajudante);
        ajudanteDto.id = ajdResponse.id;
        ajudanteDto.cpf = ajdResponse.cpf;
        ajudanteDto.nome = ajdResponse.nome;
        ajudanteDto.telefone = ajdResponse.telefone;
        ajudanteDto.valorDiaria = ajdResponse.valorDiaria;
        ajudanteDto.valorHoraExtra = ajdResponse.valorHoraExtra;       

        return ajudante;
    }
}
