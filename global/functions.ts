function ucFirst(str: string) {
  if (!str || typeof str !== 'string') return str;

  return str[0].toUpperCase() + str.slice(1);
}

export { ucFirst };
