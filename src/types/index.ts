import { Router } from 'next/router';
export interface RouterType {
  router: Pick<
    Router,
    | 'push'
    | 'replace'
    | 'reload'
    | 'back'
    | 'prefetch'
    | 'beforePopState'
    | 'events'
    | 'isFallback'
    | 'isReady'
    | 'isPreview'
  >;
}
