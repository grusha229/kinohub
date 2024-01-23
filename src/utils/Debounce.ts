const Debounce = (callback: any, interval = 0) => {
    let prevTimeoutId : ReturnType<typeof setTimeout>;
    return (...args: any) => {
        clearTimeout(prevTimeoutId);
        prevTimeoutId = setTimeout(() => callback(...args), interval);
    }
}

export default Debounce