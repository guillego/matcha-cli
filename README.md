# Matcha TS: A simple typescript CLI for learning purposes

## Installation
Download the latest release for your platform (macos, linux) and install it wherever you prefer, here is a simple bash script that does it for you (feel free to check the contents before, it's never a good idea to run a random script from the internet):
```
curl -s https://raw.githubusercontent.com/guillego/matcha-cli/main/install_matcha.sh | bash

```

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
