import util from 'util'
import { exec } from 'child_process'
import { logError } from '.'

export const subProcesses = []

export function addSubProcess(subProcess) {
    subProcesses.push(subProcess)
}

export function catchExceptions() {
  process
    .on("unhandledRejection", (reason, p) => {
      console.log(reason, "Unhandled Rejection at Promise", p)
      logError(reason + ". Unhandled Rejection at Promise:" + p)
    })
    .on("uncaughtException", (err) => {
      console.log(err, "Uncaught Exception thrown")
      // logError(err + ". Uncaught Exception thrown" + err.stack)
      // process.exit(1)
    })
}

export function killSubProcesses() {
  console.log('killing', subProcesses.length, 'child processes')
  
  for (const i in subProcesses) {
    if (!subProcesses[i]) continue

    subProcesses[i].kill()
    subProcesses[i] = undefined
  }

  try {
    const execPromise = util.promisify(exec)
    execPromise('kill -9 `ps aux | grep /usr/bin/node | grep -v grep | awk \'{ print $2 }\'` && kill -9 `ps aux | grep RuneInfinite | grep -v grep | awk \'{ print $2 }\'` && pkill -f Infinite').catch(() => {})
  } catch(e2) {
    console.log(e2)
  }
}

export function cleanExit() {
  killSubProcesses()

  process.kill(0)
}

// process.on('exit', cleanExit)
// process.on('SIGINT', cleanExit) // catch ctrl-c
// process.on('SIGTERM', cleanExit) // catch kill
