import { createLazyFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return <Navigate to="/feed/$filter" params={{ filter: "new" }} />;
}
