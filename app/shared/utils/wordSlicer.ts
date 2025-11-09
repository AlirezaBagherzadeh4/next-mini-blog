export const WordSlicer = (text: string, limit: number) => {
  const words = text.split(' ');
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(' ') + '...';
};
