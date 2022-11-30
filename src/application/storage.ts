import { Inject, Injectable } from '@nestjs/common';
import { StoreServiceI } from 'src/domain/storage.service.interface';

@Injectable()
export class StorageApp {
  constructor(@Inject('storeCosmos') private storeService: StoreServiceI) {}
  getAll() {
    return this.storeService.getAll();
  }
  getById() {
    return '';
  }

  save(data) {
    return this.storeService.save(data);
  }
  update(data: any, id: any) {
    // TODO
  }
}
