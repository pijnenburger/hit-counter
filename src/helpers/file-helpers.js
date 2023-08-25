import fs from "fs";
import path from "path";

export async function readFile(localPath) {
  return fs.readFileSync(path.join(process.cwd(), localPath), "utf8");
}

export async function writeFile(localPath, content) {
  return fs.writeFileSync(path.join(process.cwd(), localPath), content, {
    encoding: "utf8",
  });
}
