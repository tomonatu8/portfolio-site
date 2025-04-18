/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    // カスタムイベントおよび属性の型定義
    [eventHandler: `on:${string}`]: (event: CustomEvent<any>) => void;
    [attr: string]: any;
  }
}