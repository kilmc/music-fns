export const isValidScale = (notes: string[]) => {
  const duplicatesRegexp = new RegExp(/(A{2}|B{2}|C{2}|D{2}|E{2}|F{2}|G{2})/);
  const filteredNotes = [...notes]
    .sort()
    .join('')
    .replaceAll('b', '')
    .replaceAll('#', '');

  return !duplicatesRegexp.test(filteredNotes);
};
