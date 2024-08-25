import * as readline from 'readline';
import { exec } from 'child_process';
import { logError } from '.';

export const subProcesses = [];

export function addSubProcess(subProcess) {
  subProcesses.push(subProcess);
}

export function catchExceptions(kill = false) {
  process
    .on('unhandledRejection', (reason, p) => {
      console.log(reason, 'Unhandled Rejection at Promise', p);
      logError(reason + '. Unhandled Rejection at Promise:' + p);
    })
    .on('uncaughtException', (err) => {
      console.log(err, 'Uncaught Exception thrown');
      // logError(err + ". Uncaught Exception thrown" + err.stack)
      if (kill) {
        process.exit(1);
      }
    });
}

export function killSubProcesses() {
  console.log('Killing', subProcesses.length, 'child processes');

  for (const i in subProcesses) {
    if (!subProcesses[i]) continue;

    subProcesses[i].kill();
    subProcesses[i] = undefined;
  }

  try {
    const execPromise = require('util').promisify(exec);
    execPromise(
      "kill -9 `ps aux | grep /usr/bin/node | grep -v grep | awk '{ print $2 }'` && kill -9 `ps aux | grep RuneInfinite | grep -v grep | awk '{ print $2 }'` && pkill -f Infinite"
    ).catch(() => {});
  } catch (e2) {
    console.log(e2);
  }
}

export function cleanExit() {
  killSubProcesses();

  process.kill(0);
}

/* exit(1) will not force a restart on nodemon */
export default async function (msg) {
  console.log(`Exiting now... ${msg}`);
  process.exit(1);
}

// process.on('exit', cleanExit)
// process.on('SIGINT', cleanExit) // catch ctrl-c
// process.on('SIGTERM', cleanExit) // catch kill

export async function awaitEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question('', (_) => {
      rl.close();
      resolve(_);
    })
  );
}
