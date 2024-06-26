import { createLazyFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div className="index-container">
            <h3>Welcome Home!</h3>
        </div>
    )
}
