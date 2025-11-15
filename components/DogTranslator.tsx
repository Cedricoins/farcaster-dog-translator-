"use client";

import { useState } from "react";
import { translateToDog } from "@/lib/dogTranslator";

export default function DogTranslator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [castUrl, setCastUrl] = useState("");

  const handleTranslate = () => {
    const translated = translateToDog(input);
    setOutput(translated);

    const text = `Traduction wouf :\n"${input}" → "${translated}"\n\nVia @traducteur-wouf.farcaster !\nhttps://farcaster-dog-translator.vercel.app`;
    const encoded = encodeURIComponent(text);
    setCastUrl(`https://warpcast.com/~/compose?text=${encoded}`);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 text-center">
      <h1 className="text-4xl font-bold text-amber-600 mb-2">Traducteur Wouf</h1>
      <p className="text-gray-600 mb-6">Dis quelque chose, je l'aboie !</p>

      <input
        type="text"
        placeholder="Entre ta phrase ici..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleTranslate()}
        className="w-full p-4 text-lg border-4 border-amber-200 rounded-2xl focus:outline-none focus:border-amber-400 transition-all"
      />

      <button
        onClick={handleTranslate}
        className="mt-4 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 rounded-2xl hover:scale-105 transition-transform"
      >
        Traduire en Wouf !
      </button>

      {output && (
        <>
          <div className="mt-8 p-6 bg-amber-50 rounded-2xl border-4 border-amber-200">
            <p className="text-2xl font-bold text-orange-700">{output}</p>
          </div>

          <a
            href={castUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full"
          >
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
              <span>Partager sur Farcaster</span>
            </button>
          </a>
        </>
      )}
    </div>
  );
}
