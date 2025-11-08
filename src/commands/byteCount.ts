import * as fileOps from "../utils/file";

/**
 * Counts the number of bytes in a file at the given path
 * @param filePath
 * @returns number of bytes
 */
const countBytes = function (filePath: string): number {
  try {
    if (!fileOps.checkFileExists(filePath)) {
      throw new Error("File does not exist");
    }
    //TODO: using node.js streams we need to read file and then calculate count of bytes - this way we can serve for both small datasets and large datasets

    return 0;
  } catch (err) {
    throw err;
  }
};

export default countBytes;
