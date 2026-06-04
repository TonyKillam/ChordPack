"use client";
import ChordDiagram from "@/components/ChordDiagram";
import { useState } from "react";
import { chordData } from "@/data/chords";

export default function Home() {
  const [selectedChords, setSelectedChords] = useState<
    (keyof typeof chordData)[]
  >([]);

  const [search, setSearch] = useState("");

  const chordNames = Object.keys(chordData) as (keyof typeof chordData)[];

  const filteredChords = chordNames.filter((chord) =>
    chord.toLowerCase().includes(search.toLowerCase())
  );

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

        <div className="mb-8 w-full max-w-md">
          <input
            type="text"
            placeholder="Search chords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border bg-white p-4 shadow-sm"
          />

          {search && (
            <div className="mt-2 overflow-hidden rounded-xl border bg-white shadow-sm">
              {filteredChords.map((chord) => (
                <button
                  key={chord}
                  className="block w-full px-4 py-3 text-left transition hover:bg-zinc-100"
                  onClick={() => {
                    setSelectedChords((prev) =>
                      prev.includes(chord)
                        ? prev
                        : [...prev, chord]
                    );

                    setSearch("");
                  }}
                >
                  {chord}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedChords.length === 0 && (
          <div className="rounded-2xl border border-dashed bg-white p-12 text-center text-zinc-500">
            Search for a chord above to get started.
          </div>
        )}

        {search && filteredChords.length === 0 && (
          <div className="mt-2 rounded border bg-white p-3 text-zinc-500">
            No Chords found.
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {selectedChords.map((chord) => (
            <div
              key={chord}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-center text-3xl font-bold">
                {chord}
              </div>

              <div className="flex justify-center">
                <ChordDiagram chord={chord} />
              </div>

              <button
                onClick={() => removeChord(chord)}
                className="mt-4 w-full rounded-lg border py-2 hover:bg-zinc-100"
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