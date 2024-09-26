import { Outlet, Link } from "@tanstack/react-router";

export default function Layout() {
    return (
        <div>
            <nav className="p-2 flex gap-2">
                <Link
                    to="/feed/$filter"
                    params={{ filter: "new" }}
                    className="[&.active]:font-bold"
                >
                    New
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "top" }}
                    className="[&.active]:font-bold"
                >
                    Top
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "hot" }}
                    className="[&.active]:font-bold"
                >
                    Hot
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "ask" }}
                    className="[&.active]:font-bold"
                >
                    Ask
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "show" }}
                    className="[&.active]:font-bold"
                >
                    Show
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "jobs" }}
                    className="[&.active]:font-bold"
                >
                    Jobs
                </Link>
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
