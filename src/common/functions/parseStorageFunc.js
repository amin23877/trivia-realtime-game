export const parseStorageFunc = (key, id) => {
  const value =
    key === 'local' ? localStorage.getItem(id) : sessionStorage.getItem(id);
  if (value && value != 'undefined') {
    return JSON.parse(value);
  }
  return null;
};
