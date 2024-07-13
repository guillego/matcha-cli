#!/usr/bin/env node

import { setupCLI } from "./cli";
import { version } from "./version";

const cli = setupCLI(version);

cli.parse(process.argv);