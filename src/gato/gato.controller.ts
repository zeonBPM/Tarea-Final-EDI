import { Controller, Get } from '@nestjs/common';
import { GatoService } from './app.service';

@Controller('gato')
export class GatoController {
	constructor(private readonly appService: GatoService) {}

  @Get()
  getGato(): string {
    return this.GatoService.getGato();
  }
}
