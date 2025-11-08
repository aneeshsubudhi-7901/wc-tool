import { AvailableOption } from "../types";

export const AVAILABLE_OPTIONS: AvailableOption[] = [
  {
    short: "-c",
    long: "--count-bytes",
    description: "Count the number of bytes in the specified file",
  },
  {
    short: null,
    long: "--help",
    description: "Display help information",
  },
  {
    short: null,
    long: "--version",
    description: "Display version information",
  },
];
