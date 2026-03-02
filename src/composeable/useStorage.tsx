import { useState } from "@lynx-js/react";

declare const NativeModules: {
  NativeLocalStorageModule?: {
    setStorageItem: (key: string, value: unknown) => void;
    getStorageItem: (key: string, callback: (value: unknown) => void) => void;
    clearStorage: () => void;
  };
} | undefined;

interface WebStorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  clear(): void;
}

function getWebStorage(): WebStorageLike | null {
  try {
    const g = typeof globalThis !== "undefined" ? globalThis : null;
    const ls = g && "localStorage" in g ? (g as { localStorage?: WebStorageLike }).localStorage : null;
    if (ls && typeof ls.getItem === "function") return ls;
  } catch {
    // ignore
  }
  return null;
}

const webStorage = getWebStorage();

function getWebStorageItem(key: string): string | null {
  return webStorage?.getItem(key) ?? null;
}

function setWebStorageItem(key: string, value: unknown): void {
  webStorage?.setItem(key, String(value));
}

function clearWebStorage(): void {
  webStorage?.clear();
}

function getNativeModule() {
  return typeof NativeModules !== "undefined" ? NativeModules?.NativeLocalStorageModule : undefined;
}

export const useStorage = () => {
  const [storedValue, setStoredValue] = useState<unknown>(null);

  const setStorage = (key: string, value: unknown) => {
    const native = getNativeModule();
    if (native) {
      native.setStorageItem(key, value);
    } else {
      setWebStorageItem(key, value);
    }
  };

  const clearStorage = () => {
    const native = getNativeModule();
    if (native) {
      native.clearStorage();
    } else {
      clearWebStorage();
    }
    setStoredValue(null);
  };

  const getStorage = (key: string) => {
    const native = getNativeModule();
    if (native) {
      native.getStorageItem(key, (value: unknown) => {
        setStoredValue(value);
      });
    } else {
      setStoredValue(getWebStorageItem(key));
    }
  };

  return { storedValue, setStorage, getStorage, clearStorage };
};
