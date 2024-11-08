import { writeFileSync } from "fs";

const stuff = [] as number[];

for (let i = 0; i < 10; i++) {
  stuff.push(i);
}

const dist = `
  const stuff = ${JSON.stringify(stuff, null, 2)} as const;
  export { stuff };
`;

writeFileSync("dist.ts", dist);
