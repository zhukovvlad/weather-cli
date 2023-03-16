#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
	// Return Help
  }
  if (args.s) {
	// Save City
  }
  if (args.t) {
	// Save token
  }
  // Return Weather
};

initCLI();
