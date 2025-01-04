import React from "react";

import CensoredButton from "./censored-button";
import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  let { count } = JSON.parse(readFile(DATABASE_PATH));
  count = count + 1;
  writeFile(DATABASE_PATH, JSON.stringify({ count }));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <CensoredButton>{count}</CensoredButton>.
      </p>
    </main>
  );
}

export default Home;
