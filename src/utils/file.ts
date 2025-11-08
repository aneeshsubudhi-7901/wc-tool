import fs from "fs";
import path from "path";
import fsPromises from "fs/promises";

/**
 * Checks if a file exists at the given path
 * @param filePath
 * @returns Promise<boolean>
 */
const checkFileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fsPromises.access(filePath, fs.constants.F_OK);
    console.log(`File exists: ${filePath}`);
    return true;
  } catch (err) {
    console.log(`File does not exist: ${filePath}`);
    return false;
  }
};

export { checkFileExists };
