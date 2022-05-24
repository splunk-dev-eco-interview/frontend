const IS_DEBUG_ENABLED = true;

export function debug(message) {
    if (IS_DEBUG_ENABLED) {
        console.log(message);
    }
}