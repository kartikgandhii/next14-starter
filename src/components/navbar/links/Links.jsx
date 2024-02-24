import Link from "next/link"
import styles from "./links.modules.css"
import NavLink from "./navLink/navLink";

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const session = true;
    const isAdmin = true;

    return (
        <div className="styles.link">
            {links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}
            {session ? (
                <p>
                {isAdmin && <NavLink item={{ title : "Admin", path : "/admin" }}/>}
                <button>Logout</button>
                </p>
                ):(
                    <NavLink item={{ title : "Admin", path : "/admin" }}/>
            )}
            </div>
    );
};

export default Links