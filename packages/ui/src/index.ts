import { greet } from '@code-in-gym/core';
export const renderGreeting = (name: string): string =>
  `<div>${greet(name)}</div>`;
