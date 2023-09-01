export const saveDataToLocalStorage = (key: string, data: boolean) => {
    localStorage.setItem(key, JSON.stringify(data));
}