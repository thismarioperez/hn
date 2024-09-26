import React from "react";
import {} from "@tanstack/router-devtools";

const DevTools = import.meta.env.PROD
    ? () => null // Render nothing in production
    : React.lazy(() =>
          // Lazy load in development
          import("@tanstack/router-devtools").then((res) => ({
              default: res.TanStackRouterDevtools,
              // For Embedded Mode
              // default: res.TanStackRouterDevtoolsPanel
          }))
      );
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TanStackRouterDevtools = (props: any) => (
    <React.Suspense fallback={null}>
        <DevTools {...props} />
    </React.Suspense>
);
