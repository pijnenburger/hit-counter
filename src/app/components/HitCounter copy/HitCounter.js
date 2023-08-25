import React from "react";
import { readFile, writeFile } from "../../app/helpers/file-helpers.js";

const DATABASE_PATH = "/src/database.json";

function HitCounter() {
  // deconstruct hits to a variable
  let { hits } = JSON.parse(readFile(DATABASE_PATH));
  // increment the created variable by +1
  hits += 1;
  // write the new variable to the database
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return <button className={"censored"}>{hits}</button>;
}

export default HitCounter;
