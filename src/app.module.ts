import { AjudanteControllerModule } from './modules/ajudante.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'controle_horas2',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AjudanteControllerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
