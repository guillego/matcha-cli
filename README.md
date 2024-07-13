# Matcha TS: A simple typescript CLI for learning purposes

## Usage:
Run the matcha command without arguments to get the help menu
```
$ matcha
Usage: matcha [options] [command]

A simple CLI for learning TS

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  greet <name>    Greet someone by name
  help [command]  display help for command
```

## Building the CLI
1. Clone repo
2. Install dependencies `pnpm install`
  - Alternatively use the yarn or npm equivalents: `npm install` `yarn install`
3. Build the project: `pnpm build`
4. There will be a binary for each compilation target in the bin/ directory. Run the one most relevant for your system.
