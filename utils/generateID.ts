export function generateID() {
  const id = Math.random().toString(36).substring(7);
  return id;
}
