import { Observable } from 'rxjs';

abstract class IRouterService {
    /**
     * Subscribtion to route changes
     */
    abstract whenRouteChange(): Observable<Array<string>>;

    /**
     * Get current area name
     */
    abstract getAreaName(): string;

    /**
     * Get current route path
     */
    abstract getCurrentPath(): string;

    /**
     * Navigate to strict path
     * @param path Target url
     */
    abstract navigate(path: Array<string>): void;
    /**
     * Navigate up by routing tree
     */
    abstract navigateUp(): void;

    /**
     * Navigate deeper in sub-tree
     * @param routeDefinition Composite deeper path
     * @param extras Additional information
     */
    abstract navigateDeep(routeDefinition: Array<string>, extras: any): void;

}

export { IRouterService };