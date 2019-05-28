abstract class ICacheService {

    /**
     * Get item from cache
     * @param key Item key
     * @param defaultValue Value to set and return if item wasn't found
     */
    abstract get(key: string, defaultValue?: any): any;

    /**
     * Save data in cache by key
     * @param key Item key
     * @param value Data value
     */
    abstract set(key: string, value: any): void;
}

export { ICacheService };