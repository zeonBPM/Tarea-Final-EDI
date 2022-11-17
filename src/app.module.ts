import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatoController } from './gato/gato.controller';
import { GatoService } from './gato/gato.service';
@Module({
  imports: [],
  
  controllers: [AppController, GatoController],

  providers: [AppService, GatoService],
})
export class AppModule {}


