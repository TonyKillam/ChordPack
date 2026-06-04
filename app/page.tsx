"use client";
import ChordDiagram from "@/components/ChordDiagram";
import { useState } from "react";
import { chordData } from "@/data/chords";

export default function Home() {
  const [selectedChords, setSelectedChords] = useState<
    (keyof typeof chordData)[]
  >([]);

  const addChord = (chord: string) => {
    if (!selectedChords.includes(chord)) {
      setSelectedChords([...selectedChords, chord]);
    }
  };

  const removeChord = (chord: string) => {
    setSelectedChords(
      selectedChords.filter((c) => c !== chord)
    );
  };

  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-2 text-5xl font-bold">
          ChordPack
        </h1>

        <p className="mb-8 text-zinc-600">
          Build and export chord diagrams.
        </p>

        <div className="mb-8 flex gap-3">
          <button
            onClick={() => addChord("C")}
            className="rounded bg-black px-4 py-2 text-white"
          >
            C
          </button>

          <button
            onClick={() => addChord("G")}
            className="rounded bg-black px-4 py-2 text-white"
          >
            G
          </button>

          <button
            onClick={() => addChord("Am")}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Am
          </button>

          <button
            onClick={() => addChord("F")}
            className="rounded bg-black px-4 py-2 text-white"
          >
            F
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {selectedChords.map((chord) => (
            <div
              key={chord}
              className="rounded-xl border bg-white p-6 shadow"
            >
              <div className="mb-4 text-center text-3xl font-bold">
                {chord}
              </div>

              <div className="flex justify-center">
                <ChordDiagram chord={chord} />
              </div>

              <button
                onClick={() => removeChord(chord)}
                className="mt-4 w-full rounded bg-red-500 py-2 text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}