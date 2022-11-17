import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	
  getHello(): string {
    return 'Holis';
  }

 postHello(): string {
		return 'Holapost'
	}

}
