export function getRGBFromString(string: string): {
  r: number;
  b: number;
  g: number;
} {
  const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  const colors = string.match(regex);

  if (colors) {
    const red = parseInt(colors[1]);
    const green = parseInt(colors[2]);
    const blue = parseInt(colors[3]);
    return {
      r: red,
      g: green,
      b: blue,
    };
  }
  return {
    r: 255,
    g: 255,
    b: 255,
  };
}

export function shadeColor(R: number, G: number, B: number, percent: number) {
  R = (R * (100 + percent)) / 100;
  G = (G * (100 + percent)) / 100;
  B = (B * (100 + percent)) / 100;

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);

  return { r: R, g: G, b: B };
}

export function useDarkText(r: number, g: number, b: number) {
  const contrastRatio =
    (0.2126 * r) / 255 + (0.7152 * g) / 255 + (0.0722 * b) / 255;
  console.log('contrastRatio', contrastRatio);
  return contrastRatio >= 0.58;
}
