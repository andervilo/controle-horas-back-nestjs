import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DeleteAjudanteService } from 'src/modules/services/ajudante/delete-ajudante.service';
import { DeleteResult } from 'typeorm';

@Controller("api/v1/ajudantes/")
export class DeleteByIdController {

    constructor(
        private deleteByIdService: DeleteAjudanteService,
    ) {}

    @ApiTags('Ajudantes')
    @ApiOperation({ summary: 'Delete Ajudante by id' })
    @ApiParam({ name: 'id', type: Number })
    @Delete(":id")
    @ApiOkResponse({
        description: 'Delete Ajudante by id',
        type: DeleteResult,
    })
    async deleteById(@Param('id') id: number): Promise<DeleteResult> {
        return await this.deleteByIdService.delete(id);
    }
}
