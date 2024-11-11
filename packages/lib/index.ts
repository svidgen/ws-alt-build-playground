import { writeFileSync } from "fs";
import { format } from "prettier";

const stuff = [] as number[];

for (let i = 0; i < 16; i++) {
  stuff.push(i);
}

const things = {
  a: "something",
  y: "something else",
};

format(
  `
  const stuff = ${JSON.stringify(stuff, null, 2)} as const;
  const things = ${JSON.stringify(things, null, 2)} as const;
  export { stuff, things };
`,
  {
    parser: "typescript",
  }
).then((output) => writeFileSync("dist.ts", output));
