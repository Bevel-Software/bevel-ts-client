import { AxiosInstance } from 'axios';
import { BooleanResponse } from '../types';

/**
 * API client for checking server status in Bevel
 */
export class ServerApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Check if the Bevel server is alive
   */
  async isAlive(): Promise<boolean> {
    const response = await this.axios.get<BooleanResponse>('/api/is-alive');
    return response.data.response;
  }
}
