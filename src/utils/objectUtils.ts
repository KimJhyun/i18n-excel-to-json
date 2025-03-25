
const swapKeyValue = (obj: Record<string, unknown>) =>  {
    const swapped: Record<string, string> = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapped[obj[key] as string] = key;
        }
    }
    return swapped;
};

export { swapKeyValue };
