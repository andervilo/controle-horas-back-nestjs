import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ajudante } from 'src/entities/ajudante.entity';
import { UpdateAjudanteController } from './controllers/ajudante/update-ajudante.controller';
import { AjudanteListController } from './controllers/ajudante/ajudante-list.controller';
import { CreateAjudanteController } from './controllers/ajudante/create-ajudante.controller';
import { DeleteByIdController } from './controllers/ajudante/delete-by-id.controller';
import { FindByIdController } from './controllers/ajudante/find-by-id.controller';
import { CreateAjudanteService } from './services/ajudante/create-ajudante.service';
import { DeleteAjudanteService } from './services/ajudante/delete-ajudante.service';
import { GetAjudanteByIdService } from './services/ajudante/get-ajudante-by-id.service';
import { ListAjudanteService } from './services/ajudante/list-ajudante.service';
import { UpdateAjudanteService } from './services/ajudante/update-ajudante.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Ajudante]),],
    controllers: [
        UpdateAjudanteController,
        FindByIdController,
        AjudanteListController,
        CreateAjudanteController,
        DeleteByIdController
    ],
    providers: [
        DeleteAjudanteService,
        ListAjudanteService,
        GetAjudanteByIdService,
        UpdateAjudanteService,
        CreateAjudanteService],
})
export class AjudanteControllerModule {}
