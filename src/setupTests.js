// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { TextEncoder, TextDecoder } from "util";

// Polyfills pour MSW
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock TransformStream pour MSW
global.TransformStream = class TransformStream {
  constructor() {
    this.readable = {};
    this.writable = {};
  }
};

// Mock BroadcastChannel pour MSW
global.BroadcastChannel = class BroadcastChannel {
  constructor(name) {
    this.name = name;
  }
  postMessage() {}
  close() {}
  addEventListener() {}
  removeEventListener() {}
};

// Nettoie après chaque test
afterEach(() => {
  // Nettoie le DOM
  cleanup();
  // Nettoie tous les timers
  jest.clearAllTimers();
  // Nettoie tous les mocks
  jest.clearAllMocks();
});

// Configure un timeout global pour éviter les tests qui traînent
jest.setTimeout(10000);
