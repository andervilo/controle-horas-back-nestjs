import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Ajudante } from 'src/entities/ajudante.entity';
import { UpdateAjudanteService } from 'src/modules/services/ajudante/update-ajudante.service';

@Controller("api/v1/ajudantes/")
export class UpdateAjudanteController {

    constructor(
        private updateService: UpdateAjudanteService,
    ) {}

    @ApiTags('Ajudantes')
    @Put(":id")
    @ApiOkResponse({
        description: 'Update Ajudante',
        type: Ajudante,
    })
    async getById(@Param('id') id: number, @Body() ajudante: Ajudante ): Promise<Ajudante> {
        return await this.updateService.update(id, ajudante);
    }
}
