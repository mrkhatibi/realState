function ShortTitle(title) {
  if (!title) return;

  return title.length > 30 ? title.slice(0, 30) + "..." : title;
}

export { ShortTitle };
