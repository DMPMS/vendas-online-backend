import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<Type>(
    key: string,
    functionRequest: () => Promise<Type>,
  ): Promise<Type> {
    const allData: Type = await this.cacheManager.get(key);

    if (allData) {
      return allData;
    }

    const cities: Type = await functionRequest();

    await this.cacheManager.set(key, cities);

    return cities;
  }
}
