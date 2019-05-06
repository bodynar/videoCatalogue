import { isNullOrUndefined } from 'util';

class ActionResult<T> {
    public result: T;

    public error: string;

    public static Fail<T>(error: string): ActionResult<T> {
        const actionResult: ActionResult<T> = new ActionResult<T>();
        actionResult.error = error;

        return actionResult;
    }

    public static Success<T>(result: T): ActionResult<T> {
        const actionResult: ActionResult<T> = new ActionResult<T>();
        actionResult.result = result;

        return actionResult;
    }

    public success(): boolean {
        return !isNullOrUndefined(this.result) && this.error === '';
    }

    private constructor() { }


}

export { ActionResult };