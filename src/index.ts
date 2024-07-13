import { Command } from 'commander';

const cli = new Command();

cli
  .name('matcha')
  .description('A simple CLI for learning TS')
  .version('0.0.0');

cli
  .command('greet <name>')
  .description('Greet someone by name')
  .action((name: string) => {
    console.log(`Howdy, ${name}!`);
  });

cli.parse(process.argv);
