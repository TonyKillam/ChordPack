"use client";

import { useEffect, useRef } from "react";
import { SVGuitarChord } from "svguitar";
import { chordData } from "@/data/chords";

type Props = {
  chord: keyof typeof chordData;
};

export default function ChordDiagram({ chord }: Props) {
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!ref.current) return;
  
      console.log("Drawing chord:", chord);
  
      ref.current.innerHTML = "";
  
      const data = chordData[chord];
  
      const chart = new SVGuitarChord(ref.current);
  
      chart
        .chord({
          fingers: data.fingers,
          barres: [],
          title: chord,
        })
        .draw();
  
      console.log("HTML:", ref.current.innerHTML);
    }, [chord]);
  
    return (
      <div
        ref={ref}
        style={{
          width: "200px",
          minHeight: "250px",
          border: "1px solid red",
        }}
      />
    );
  }