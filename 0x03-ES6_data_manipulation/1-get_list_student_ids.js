export default function getListStudentsIds(l) {
  if (Array.isArray(l)) {
    return l.map((obj) => obj.id);
  }
  return [];
}
