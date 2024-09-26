import { Outlet } from "@tanstack/react-router";
import Navigation from "./Navigation";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="pt-14 md:pt-0 md:pl-14">
                <Outlet />
            </main>
        </div>
    );
}
