const dogDictionary: Record<string, string> = {
  a: 'wou', b: 'baf', c: 'grou', d: 'djaf', e: 'ou', f: 'frr', g: 'grr', h: 'hou',
  i: 'i', j: 'japp', k: 'kaf', l: 'louf', m: 'm', n: 'n', o: 'o', p: 'paf', q: 'kou',
  r: 'rrr', s: 'sss', t: 't', u: 'u', v: 'vouf', w: 'waf', x: 'xrr', y: 'yap', z: 'zouf',
  '!': '!!!', '?': '??', ' ': ' *halète* ', ',': '…', '.': '…'
};

export function translateToDog(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .map(char => dogDictionary[char] || char)
    .join('')
    .replace(/\*halète\*/g, ' *halète* ')
    .trim()
    .replace(/!!!/g, ' 🐶!!!')
    .replace(/\?\?/g, ' 🐕??');
}
