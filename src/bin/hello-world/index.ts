#!/usr/bin/env node
import {wait} from "./../../lib/helpers/wait.js";
import {executeCommand} from "../../lib/helpers/execute-command.js"; // GOTCHA: import has to have explicit .js extension

console.log('Hello');

await wait(500)

console.log(await executeCommand('echo "World"'))
