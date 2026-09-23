import { useEffect, useState } from 'react';
import { terminal } from '../content';

const Line = ({ text }: { text: string }) =>
  text.startsWith('$ ')
    ? <div><span className="prompt">$ </span>{text.slice(2)}</div>
    : <div className="text-[var(--fg-2)] whitespace-pre-wrap break-words">{text}</div>;

// Types the "$" commands character by character, prints output lines, loops.
const TerminalCard = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [typing, setTyping] = useState('');

  useEffect(() => {
    let i = 0, c = 0, t = 0, stop = false;
    const step = () => {
      if (stop) return;
      if (i >= terminal.length) {
        t = window.setTimeout(() => { i = 0; c = 0; setLines([]); step(); }, 5000);
        return;
      }
      const line = terminal[i];
      if (line.startsWith('$ ') && c < line.length) {
        c++; setTyping(line.slice(0, c));
        t = window.setTimeout(step, 30 + Math.random() * 50);
        return;
      }
      setLines((l) => [...l, line]); setTyping(''); i++; c = 0;
      t = window.setTimeout(step, line.startsWith('$ ') ? 300 : 120);
    };
    t = window.setTimeout(step, 700);
    return () => { stop = true; clearTimeout(t); };
  }, []);

  return (
    <div className="terminal flex h-full w-full flex-col overflow-hidden rounded-[10px] p-[clamp(12px,1.2vw,20px)]">
      <div className="mb-3 flex shrink-0 gap-1.5">
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />)}
      </div>
      <div className="flex flex-1 flex-col justify-end overflow-hidden">
        {lines.map((l, k) => <Line key={k} text={l} />)}
        <div><span className="prompt">{typing ? '$ ' : ''}</span>{typing.slice(2)}<span className="cursor" /></div>
      </div>
    </div>
  );
};

export default TerminalCard;
