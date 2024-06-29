export default function composeEventHandlers<E>(
    originalEventHandler?: (event: E) => void,
    ourEventHandler?: (event: E) => void,
    { checkForDefaultPrevented }: { checkForDefaultPrevented?: boolean } = {}
): (event: E) => void {
    return function (event: E) {
        if (originalEventHandler) {
            originalEventHandler(event);
        }

        if (ourEventHandler) {
            if (!checkForDefaultPrevented || !(event as any).defaultPrevented) {
                ourEventHandler(event);
            }
        }
    };
}
