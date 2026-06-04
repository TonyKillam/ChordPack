import type { Finger } from "svguitar";

export type ChordDefinition = {
  fingers: Finger[];
};

export type ChordDatabase = Record<
  string,
  ChordDefinition
>;