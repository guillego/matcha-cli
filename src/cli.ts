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
    .command("greet <name>")
    .description("Greet someone by name")
    .action((name: string) => {
      console.log(`Howdy, ${name}!`);
    });

  return cli;
}
