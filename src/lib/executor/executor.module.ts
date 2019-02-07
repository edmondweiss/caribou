import { execSync } from "child_process";

export function executeSync(commands: string): string | Buffer {
  return execSync(commands, {
    stdio: 'inherit',
    windowsHide: true
  });
}
