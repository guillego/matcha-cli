import { Command } from "commander";

/**
 * Creates the main CLI program.
 * @returns {Command} The base CLI
 */
function createCLI(version: string): Command {
  const cli = new Command();

  cli
    .name("matcha")
    .description("A simple CLI for learning TS")
    .version(version);

  return cli;
}

/**
 * Sets up and parses the CLI program.
 * * @returns {Command} The configured CLI Command instance
 */
export function setupCLI(version: string) {
  const cli = createCLI(version);
  
  cli
    .command("greet [name]")
    .description("Greet someone by name")
    .option("--cowboy", "Greet with a cowboy style")
    .option("--australian", "Greet with an Australian style")
    .action((name: string | undefined, options: any) => {
      const greeting = name ? name : "pal";

      if (options.cowboy && options.australian) {
        console.log(`Please choose only one style: --cowboy or --australian.`);
      } else if (options.cowboy) {
        console.log(`Howdy, ${greeting}!`);
      } else if (options.australian) {
        console.log(`G'day, ${greeting}!`);
      } else {
        console.log(`Hello, ${greeting}!`);
      }
    });

  cli
    .command("bye")
    .description("Say goodbye")
    .action(() => {
      console.log("Farewell, friend!");
    });

  return cli;
}
