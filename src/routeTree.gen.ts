/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const appIndexLazyImport = createFileRoute('/(app)/')()
const appAboutLazyImport = createFileRoute('/(app)/about')()

// Create/Update Routes

const appIndexLazyRoute = appIndexLazyImport
  .update({
    path: '/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(app)/index.lazy').then((d) => d.Route))

const appAboutLazyRoute = appAboutLazyImport
  .update({
    path: '/about',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(app)/about.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(app)/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof appAboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/(app)/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/about': typeof appAboutLazyRoute
  '/': typeof appIndexLazyRoute
}

export interface FileRoutesByTo {
  '/about': typeof appAboutLazyRoute
  '/': typeof appIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/about': typeof appAboutLazyRoute
  '/': typeof appIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/about' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/'
  id: '__root__' | '/about' | '/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  appAboutLazyRoute: typeof appAboutLazyRoute
  appIndexLazyRoute: typeof appIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  appAboutLazyRoute: appAboutLazyRoute,
  appIndexLazyRoute: appIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/about",
        "/"
      ]
    },
    "/about": {
      "filePath": "(app)/about.lazy.tsx"
    },
    "/": {
      "filePath": "(app)/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
