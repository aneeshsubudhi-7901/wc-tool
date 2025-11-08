#!/usr/bin/env node
import fs from "fs";
import path from "path";
import * as fileOps from "./utils/file";
import { AvailableOption, OutputStat } from "./types";
import { AVAILABLE_OPTIONS } from "./config/constants";
import countBytes from "./commands/byteCount";

/**
 * Initiates the command
 * @returns void
 */
function commandInit(): void {
  const args = process.argv;
  console.log(args);
  if (args.length < 3) {
    console.log("No arguments provided. Use --help to see available options.");
    return;
  }
  let argsLen = args.length;
  if (
    AVAILABLE_OPTIONS.find((opt) => {
      if (opt.long === args[argsLen - 1] || opt.short === args[argsLen - 1]) {
        return true;
      }
    })
  ) {
    console.log("Last argument must be a file path.");
    return;
  }
  const outputStats: OutputStat[] = [];
  const filePath: string = args[argsLen - 1];
  for (let i = 2; i < argsLen - 1; i++) {
    const arg = args[i];
    if (arg === "-c" || arg === "--count-bytes") {
      let byteCount = countBytes(filePath);
      outputStats.push({
        option: "byte count",
        count: byteCount,
      });
    }
  }

  for (let i = 0; i < outputStats.length; i++) {
    const stat = outputStats[i];
    console.log(`${stat.option} ${stat.count} ${filePath}`);
  }
}

commandInit();

export { countBytes };
