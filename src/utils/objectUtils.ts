const swapKeyValue = (obj: Record<string, unknown>) => {
    const swapped: Record<string, string> = {};
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            swapped[obj[key] as string] = key;
        }
    }
    return swapped;
};

export { swapKeyValue };
