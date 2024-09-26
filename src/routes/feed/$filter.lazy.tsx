import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/feed/$filter")({
    component: FeedComponent,
});

function FeedComponent() {
    const { filter } = Route.useParams();
    return <div>Feed filter: {filter}</div>;
}
