import type { Preview } from "@storybook/react-vite";
import "../src/App.css";

if (typeof window !== 'undefined' && !('__LEPUS__' in window)) {
  (window as any).__LEPUS__ = false;
}

// ── Lynx global polyfills ──────────────────────────────────────────
function injectLynxGlobals() {
  // @ts-expect-error - Lynx globals
  globalThis.__MAIN_THREAD__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.__BACKGROUND__ = true;
  // @ts-expect-error - Lynx globals
  globalThis.__DEV__ = true;
  // @ts-expect-error - Lynx globals
  globalThis.__PROFILE__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.__ALOG__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.__ALOG_ELEMENT_API__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.__JS__ = true;
  // @ts-expect-error - Lynx globals
  globalThis.__LEPUS__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.__ENABLE_SSR__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.globDynamicComponentEntry = "__Card__";
  // @ts-expect-error - Lynx globals
  globalThis.__REF_FIRE_IMMEDIATELY__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.__FIRST_SCREEN_SYNC_TIMING__ = "immediately";
  // @ts-expect-error - Lynx globals
  globalThis.__TESTING_FORCE_RENDER_TO_OPCODE__ = false;
  // @ts-expect-error - Lynx globals
  globalThis.console.alog = globalThis.console.alog ?? (() => {});
  // @ts-expect-error - Lynx globals
  globalThis.console.profile = globalThis.console.profile ?? (() => {});
  // @ts-expect-error - Lynx globals
  globalThis.console.profileEnd = globalThis.console.profileEnd ?? (() => {});

  // Lynx element API — creates real DOM elements
  let uiSignNext = 0;
  const elApi = {
    __CreatePage(_tag: string) {
      const page = this.__CreateElement("page");
      document.body.innerHTML = "";
      document.body.appendChild(page);
      return page;
    },
    __CreateRawText(text: string) {
      return document.createTextNode(text);
    },
    __GetElementUniqueID(e: Element) {
      return (e as any).$$uiSign;
    },
    __SetClasses(e: Element, cls: string) {
      e.className = cls;
    },
    __CreateElement(tag: string) {
      if (tag === "raw-text") return document.createTextNode("");
      const el = document.createElement(tag);
      (el as any).$$uiSign = uiSignNext++;
      return el;
    },
    __CreateView() {
      return this.__CreateElement("view");
    },
    __CreateScrollView() {
      return this.__CreateElement("scroll-view");
    },
    __FirstElement(e: Element) {
      return e.firstChild;
    },
    __CreateText() {
      return this.__CreateElement("text");
    },
    __CreateImage() {
      return this.__CreateElement("image");
    },
    __CreateWrapperElement() {
      return this.__CreateElement("wrapper");
    },
    __AddInlineStyle(e: HTMLElement, key: string, value: string) {
      (e.style as any)[key] = value;
    },
    __AppendElement(parent: Node, child: Node) {
      parent.appendChild(child);
    },
    __SetCSSId(e: Element | Element[], id: string, entryName?: string) {
      const cssId = `${entryName ?? "__Card__"}:${id}`;
      if (Array.isArray(e)) e.forEach((item) => { (item as any).cssId = cssId; });
      else (e as any).cssId = cssId;
    },
    __SetAttribute(e: Element, key: string, value: any) {
      if (
        ["style", "class", "className", "key", "id", "ref"].includes(key) ||
        /^data-/.test(key) ||
        /^(bind|catch|global-bind|capture-bind|capture-catch)/.test(key)
      ) {
        return;
      }
      if (key === "text") { e.textContent = String(value); return; }
      if (value === null) e.removeAttribute(key);
      else if (typeof value === "string") e.setAttribute(key, value);
      else e.setAttribute(key, JSON.stringify(value));
    },
    __AddEvent(e: Element, eventType: string, _eventName: string, eventHandler: any) {
      if (!eventHandler) return;
      const listener = () => {
        if (typeof eventHandler === "function") eventHandler();
        else if (typeof eventHandler === "object" && eventHandler.type === "worklet") {
          // noop
        }
      };
      (e as any).__storyListener = listener;
      e.addEventListener("click", listener);
    },
    __GetEvent(_e: Element, _eventType: string, _eventName: string) {
      return undefined;
    },
    __SetID(e: Element, id: string) {
      e.id = id;
    },
    __SetInlineStyles(e: HTMLElement, styles: string | Record<string, string>) {
      if (typeof styles === "string") e.setAttribute("style", styles);
      else Object.assign(e.style, styles);
    },
    __AddDataset(e: HTMLElement, key: string, value: string) {
      e.dataset[key] = value;
    },
    __SetDataset(e: HTMLElement, dataset: Record<string, string>) {
      Object.assign(e.dataset, dataset);
    },
    __GetDataset(e: HTMLElement) {
      return e.dataset;
    },
    __RemoveElement(parent: Node, child: Node) {
      if (child.parentNode === parent) parent.removeChild(child);
    },
    __InsertElementBefore(parent: Node, child: Node, ref: Node | null) {
      if (ref) parent.insertBefore(child, ref);
      else parent.appendChild(child);
    },
    __ReplaceElement(newEl: Node, oldEl: Node) {
      oldEl.parentNode?.replaceChild(newEl, oldEl);
    },
    __FlushElementTree() {},
    __GetTag(e: Element) {
      return e.tagName.toLowerCase();
    },
    __GetAttributeByName(e: Element, name: string) {
      return e.getAttribute(name);
    },
    __ElementAnimate(_element: Element, _args: any[]) {},
    __SetGestureDetector(_e: Element, _id: string, _type: string, _config: any, _relationMap: any) {},
    __RemoveGestureDetector(_e: Element, _id: string) {},
    __CreateList() {
      return this.__CreateElement("list");
    },
    __UpdateListComponents() {},
    __UpdateListCallbacks() {},
    __GetElementByUniqueId(_uniqueId: number) { return undefined; },
    __GetPageElement() { return document.body.firstChild; },
    __QuerySelector(e: Element, cssSelector: string) {
      return e.querySelector(cssSelector) ?? undefined;
    },
  };

  for (const [key, fn] of Object.entries(elApi)) {
    (globalThis as any)[key] = fn.bind(elApi);
  }

  // Lynx global object
  (globalThis as any).lynx = {
    performance: {
      _generatePipelineOptions: () => ({ pipelineID: "pipelineID", needTimestamps: false }),
      _onPipelineStart: () => {},
      _markTiming: () => {},
      _bindPipelineIdWithTimingFlag: () => {},
    },
    getNativeApp: () => ({
      callLepusMethod: (...args: any[]) => { args[2]?.(); },
      markTiming: () => {},
      createJSObjectDestructionObserver: () => ({}),
    }),
    createSelectorQuery: () => ({
      selectUniqueID: () => ({
        invoke: () => ({ exec: () => {} }),
        setNativeProps: () => ({ exec: () => {} }),
      }),
    }),
    getCoreContext: () => ({ dispatchEvent: () => {} }),
    getJSContext: () => ({ dispatchEvent: () => {} }),
    getJSModule: () => ({ addListener: () => {}, removeListener: () => {}, emit: () => {} }),
    reportError: (e: any) => { throw e; },
  };

  (globalThis as any).requestAnimationFrame = setTimeout;
  (globalThis as any).cancelAnimationFrame = clearTimeout;
  (globalThis as any).$kTemplateAssembler = {};
  (globalThis as any).registerDataProcessor = () => {};
  (globalThis as any).__OnLifecycleEvent = () => {};
  (globalThis as any)._ReportError = () => {};
  (globalThis as any).SystemInfo = {
    platform: "web",
    pixelRatio: 1,
    pixelWidth: window.innerWidth,
    pixelHeight: window.innerHeight,
    osVersion: "1.0",
    enableKrypton: true,
    runtimeType: "browser",
    lynxSdkVersion: "3.0",
  };

  // tt methods are populated by injectTt() via define-replaced lynxCoreInject
  // _params is set in the define expression for lynxCoreInject
}

injectLynxGlobals();

// ── Decorators ─────────────────────────────────────────────────────
import { useTheme, useToast, ThemeProvider, ToastProvider } from "../src/providers";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
  decorators: [(Story) => <Providers><Story /></Providers>],
};

export default preview;
