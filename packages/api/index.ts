const stuff = [] as number[];

for (let i = 0; i < 100; i++) {
  stuff.push(i);
}

console.log(`
  const stuff = ${JSON.stringify(stuff, null, 2)} as const;
  export { stuff };
`);
