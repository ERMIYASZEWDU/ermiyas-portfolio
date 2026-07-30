// src/utils/vec.ts
export function dot(a: number[], b: number[]) {
  return a.reduce((sum, v, i) => sum + v * (b[i] ?? 0), 0);
}

export function magnitude(a: number[]) {
  return Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
}

export function cosineSimilarity(a: number[], b: number[]) {
  const magA = magnitude(a);
  const magB = magnitude(b);
  if (magA === 0 || magB === 0) return 0;
  return dot(a, b) / (magA * magB);
}
