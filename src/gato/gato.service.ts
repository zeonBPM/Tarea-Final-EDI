import { Injectable } from '@nestjs/common';

@Injectable()
export class GatoService {
	
  getGato(): string {
    return 'Gato';
  }


}
