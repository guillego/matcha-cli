import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';

const execCLI = (args: string): string => {
  return execSync(`node dist/src/index.js ${args}`).toString().trim();
};

describe('CLI', () => {
  it('should greet with default message', () => {
    const output = execCLI('greet Alice');
    expect(output).toBe('Hello, Alice!');
  });

  it('should greet with cowboy style', () => {
    const output = execCLI('greet Alice --cowboy');
    expect(output).toBe('Howdy, Alice!');
  });

  it('should greet with Australian style', () => {
    const output = execCLI('greet Alice --australian');
    expect(output).toBe("G'day, Alice!");
  });

  it('should greet with default name when no name is provided', () => {
    const output = execCLI('greet');
    expect(output).toBe('Hello, pal!');
  });

  it('should say farewell with the bye command', () => {
    const output = execCLI('bye');
    expect(output).toBe('Farewell, friend!');
  });
});
