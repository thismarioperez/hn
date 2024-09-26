import { Link } from "@tanstack/react-router";

import {
    IoNewspaper,
    IoNewspaperOutline,
    IoArrowUpCircle,
    IoArrowUpCircleOutline,
    IoShareSocial,
    IoShareSocialOutline,
    IoBriefcase,
    IoBriefcaseOutline,
} from "react-icons/io5";
import { HiFire, HiOutlineFire } from "react-icons/hi";
import { RiQuestionAnswerFill, RiQuestionAnswerLine } from "react-icons/ri";

export default function Navigation() {
    return (
        <aside className="flex flex-row md:flex-col fixed h-14 md:h-full w-full md:w-14 top-0 left-0">
            <nav className="flex flex-row md:flex-col md-h-full gap-2 md:gap-4 flex-1">
                <Link
                    to="/feed/$filter"
                    params={{ filter: "new" }}
                    className="[&.active]:font-bold"
                >
                    {({ isActive }) => (
                        <>
                            {isActive ? (
                                <IoNewspaper />
                            ) : (
                                <IoNewspaperOutline />
                            )}
                            New
                        </>
                    )}
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "top" }}
                    className="[&.active]:font-bold"
                >
                    {({ isActive }) => (
                        <>
                            {isActive ? (
                                <IoArrowUpCircle />
                            ) : (
                                <IoArrowUpCircleOutline />
                            )}
                            Top
                        </>
                    )}
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "hot" }}
                    className="[&.active]:font-bold"
                >
                    {({ isActive }) => (
                        <>
                            {isActive ? <HiFire /> : <HiOutlineFire />}
                            Hot
                        </>
                    )}
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "ask" }}
                    className="[&.active]:font-bold"
                >
                    {({ isActive }) => (
                        <>
                            {isActive ? (
                                <RiQuestionAnswerFill />
                            ) : (
                                <RiQuestionAnswerLine />
                            )}
                            Ask
                        </>
                    )}
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "show" }}
                    className="[&.active]:font-bold"
                >
                    {({ isActive }) => (
                        <>
                            {isActive ? (
                                <IoShareSocial />
                            ) : (
                                <IoShareSocialOutline />
                            )}
                            Show
                        </>
                    )}
                </Link>
                <Link
                    to="/feed/$filter"
                    params={{ filter: "jobs" }}
                    className="[&.active]:font-bold"
                >
                    {({ isActive }) => (
                        <>
                            {isActive ? (
                                <IoBriefcase />
                            ) : (
                                <IoBriefcaseOutline />
                            )}
                            Jobs
                        </>
                    )}
                </Link>
            </nav>
            <nav className="ml-auto md:ml-0 md:mt-auto">
                <Link
                    to="/about"
                    className="[&.active]:font-bold justify-self-end"
                >
                    About
                </Link>
            </nav>
        </aside>
    );
}
