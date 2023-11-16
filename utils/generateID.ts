export function generateID(length = 7) {
  const id = Math.random().toString(36).substring(2, length);
  return id;
}
