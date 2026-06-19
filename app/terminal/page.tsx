// app/terminal/page.tsx

/*

  If you've stumbled upon this script, chances are you were either searching for the secret
  terminal commands or simply wandering through my repository.

  What's the purpose of this page?

  Absolutely none.

  It's just a little easter egg that I enjoy keeping around.

*/

"use client";
import { useState, useRef, useEffect, useCallback } from "react";

type Line =
  | { kind: "input"; text: string }
  | { kind: "output"; text: string }
  | { kind: "blank" };

const DS = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣾⣿⣿⣿⣿⣷⡶⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣰⣿⣿⣿⠋⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⡟⠛⠛⠃⠀⠀⠀⠀⠀
⠀⠀⠀⣼⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀
⠀⠀⢰⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⠿⠟⠛⠁⠀⠀⠀⠀⠀
⠀⠀⣾⣿⣿⣿⣿⣿⣿⣶⣤⣤⣴⣾⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⠀⠀
⠀⠀⣉⠉⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⣉⠀⠀
⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⠿⠿⠀⠀
⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠋⠉⠀⠀⠀⠀
⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣤⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⢿⣿⣿⣿⣿⠟⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const HWK = `

⠀⠀⠀THE ⠀⠀⠀⠀
⠀⠀⠀⠀ABYSS⠀⠀
⠀⠀⠀STARES  
⠀⠀⠀⠀⠀BACK⠀⠀⠀⠀

`;

const Help = `
  core: 
    help, clear, edro, rm, sudo

  links: 
    cesium, youtube, linkedin
    
  other: 
    try exploring...
`.trim();

const COMMANDS: Record<string, string> = {
  help: Help,

  edro: "that's me!",

  rm: "nice try",
  sudo: "lol",

  cesium: "Check out cesium.pt",
  youtube: "Check out my channel on youtube!",
  linkedin: "You can find my linkedin on the about section",

  dreamnail: "...",
  void: HWK,
  abyss: HWK,
  hornet: "Guarana",
  bench: "Progress saved.",
  deepnest: "Welcome home",
  hollow: "No cost too great.",
  knight: "Sealed.",
  vessel: "Sealed.",
  radiance: "False god.",
  silksong: "Go try it",

  starwars: "Command not avaliable in this galaxy",
  force: "It surrounds us.",
  jedi: "There is no command by that name.",
  sith: "Access requires fewer restrictions.",
  hyperspace: "Calculating route...",
  order66: "Request blocked.",
  deathstar: DS,
  yoda: "There is no command by that name.",

  obiwan: "Only a Sith deals in absolutes",
  obi: "Only a Sith deals in absolutes",
  anakin: `OBI-WAN
You were the Chosen One!
It was said that you would destroy the Sith, not join them!
Bring balance to the Force, not leave it in darkness!

ANAKIN (burning)
I hate you!

OBI-WAN
You were my brother, Anakin...
I loved you.`,

  path: "A long time ago...",
  mask: "Integrity nominal.",
  chosen: "Not all destinies are chosen.",
};

export default function TerminalPage() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const submit = useCallback(() => {
    const cmd = input.trim().toLowerCase();
    const newLines: Line[] = [{ kind: "input", text: input.trim() }];

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (cmd in COMMANDS) {
      newLines.push({ kind: "output", text: COMMANDS[cmd] });
    } else if (cmd) {
      newLines.push({ kind: "output", text: `command not found: ${cmd}` });
    }

    newLines.push({ kind: "blank" });
    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  }, [input]);

  return (
    <div
      className="max-w-7xl mx-auto px-4 md:px-2 py-6 min-h-[60vh]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center mb-6 gap-3">
        <div className="inline-flex items-center gap-3 border border-gray-200 bg-gray-200 rounded-sm px-3 py-1.5 text-sm text-zinc-800 font-mono">
          <span>&gt;_</span>
          <span>terminal</span>
        </div>
      </div>

      <div className="border border-gray-200 rounded-sm overflow-hidden">
        <div className="p-5 font-mono text-sm space-y-1 min-h-70 max-h-[60vh] overflow-y-auto bg-gray-50">
          {lines.map((line, i) => {
            if (line.kind === "blank") return <div key={i} className="h-1" />;
            if (line.kind === "input")
              return (
                <div key={i} className="flex gap-2 text-gray-400">
                  <span className="select-none shrink-0">~$</span>
                  <span className="text-gray-700">{line.text}</span>
                </div>
              );
            return (
              <pre
                key={i}
                className="text-zinc-800 tracking-wide pl-6 whitespace-pre font-mono"
              >
                {line.text}
              </pre>
            );
          })}

          <div className="flex gap-2 text-gray-400 pt-1">
            <span className="select-none shrink-0">~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              autoFocus
              autoComplete="off"
              spellCheck={false}
              className="bg-transparent text-gray-700 outline-none flex-1 caret-gray-400"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
