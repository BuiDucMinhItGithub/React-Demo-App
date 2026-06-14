// Register jest-dom matchers
import '@testing-library/jest-dom';

// Provide a basic clipboard implementation for tests that use user-event
if (!(globalThis as any).navigator) (globalThis as any).navigator = {};
if (!(globalThis as any).navigator.clipboard) {
  (globalThis as any).navigator.clipboard = {
    writeText: async (_text: string) => {},
    readText: async () => '',
  };
}
// Register jest-dom matchers for Testing Library
import '@testing-library/jest-dom';

// Optional: provide a lightweight localStorage mock if tests need it globally
if (typeof globalThis.localStorage === 'undefined') {
  const store: Record<string, string> = {};
  const localStorageMock = {
    getItem(key: string) { return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null; },
    setItem(key: string, value: string) { store[key] = String(value); },
    removeItem(key: string) { delete store[key]; },
    clear() { for (const k of Object.keys(store)) delete store[k]; },
  };
  (globalThis as any).localStorage = localStorageMock;
}
