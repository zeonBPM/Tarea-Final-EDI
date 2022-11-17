import { Controller, Get } from '@nestjs/common';
import { GatoService } from './gato.service';

@Controller('gato')
export class GatoController {
	constructor(private readonly GatoService: GatoService) {}

  @Get()
  getGato(): string {
    return this.GatoService.getGato();
  }
  
  
}
