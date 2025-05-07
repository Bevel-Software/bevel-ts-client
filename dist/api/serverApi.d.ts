import { AxiosInstance } from 'axios';
/**
 * API client for checking server status in Bevel
 */
export declare class ServerApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Check if the Bevel server is alive
     */
    isAlive(): Promise<boolean>;
}
