
import { Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Ajudante } from 'src/dto/ajudante/ajudante.dto';
import { ListAjudanteService } from 'src/modules/services/ajudante/list-ajudante.service';

@Controller("api/v1/ajudantes")
export class AjudanteListController {

    constructor(
        private listAjudanteService: ListAjudanteService
    ) {}

    @ApiTags('Ajudantes')
    @Get()
    @ApiOkResponse({
        description: 'List all ajudantes',
        type: Ajudante,
        isArray: true,
    })
    async getList(): Promise<Ajudante[]> {
        return await this.listAjudanteService.list();
    }
}
