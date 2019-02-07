#!/usr/bin/env node
import { executeSync } from "./lib/executor/executor.module";
console.log(`\nprocess.argv ${process.argv}`);
console.log(`\nprocess.argv0 ${process.argv0}`)
const args = process.argv.slice(2);
console.log('the args', args);
executeSync(args.join(' '))
