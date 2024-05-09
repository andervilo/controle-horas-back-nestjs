import { Controller, Get, Param } from '@nestjs/common';
import { GetAjudanteByIdService } from 'src/modules/services/ajudante/get-ajudante-by-id.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Ajudante } from 'src/entities/ajudante.entity';

@Controller("api/v1/ajudantes/")
export class FindByIdController {

    constructor(
        private findByIdService: GetAjudanteByIdService,
    ) {}

    @ApiTags('Ajudantes')
    @Get(":id")
    @ApiOkResponse({
        description: 'Get Ajudante by id',
        type: Ajudante,
    })
    async getById(@Param('id') id: number): Promise<Ajudante> {
        return await this.findByIdService.getById(id);
    }
}
