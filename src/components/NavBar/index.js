import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { getMenuList } from "../../api/common/navBar";
import { useSelector } from "react-redux";
import { PROVIDER_ROLE_ID } from "../../constants";
import BurgerButton from "./components/BurgerButton";
import { useOnClickOutside } from "usehooks-ts";
import "./index.scss";

const NavBar = () => {
    const { user } = useSelector((state) => state.app);

    const [menu, setMenu] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [burgerButtonRef, setBurgerButtonRef] = useState(null);

    const navbarCollapseRef = useRef();

    useOnClickOutside(navbarCollapseRef, (e) => {
        if (
            !burgerButtonRef.current ||
            !burgerButtonRef.current.contains(e.target)
        ) {
            setExpanded(false);
        }
    });

    const toggleMenuClick = () => {
        setExpanded(!expanded);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        document.getElementById("logout-form").submit();
    };

    useEffect(() => {
        getMenuList().then(({ data }) => setMenu(data));
    }, []);

    const expand = user.role.id === PROVIDER_ROLE_ID ?  "md" : "xxxl";
    const dropdownClasses = [
        `d-none d-${expand}-flex`,
        `d-${expand}-none custom-dropdown`,
    ];

    return (
        <Navbar expand={expand} expanded={expanded} className="custom-navbar">
            <Container fluid>
                <div className="container">
                    <Navbar.Brand href="/">Change Within Reach</Navbar.Brand>
                    <BurgerButton
                        click={toggleMenuClick}
                        on={expanded}
                        setRef={setBurgerButtonRef}
                    />
                </div>
                <div className="nav-container">
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        ref={navbarCollapseRef}>
                        <Nav className="me-auto links">
                            {menu &&
                                menu.links?.map((item) => {
                                    if (item.submenu) {
                                        if ("items_count" in item) {
                                            const itemTitle = (
                                                <span>
                                                    <span>{item.name}</span>
                                                    {item.items_count ? (
                                                        <span className="counter ms-1 text-red">
                                                            ({item.items_count})
                                                        </span>
                                                    ) : null}
                                                </span>
                                            );
                                            return dropdownClasses.map(
                                                (className, index) => (
                                                    <NavDropdown
                                                        key={`${item.name}-${index}`}
                                                        className={className}
                                                        title={itemTitle}>
                                                        {item.submenu.map(
                                                            (subItem, index) => {
                                                                return (
                                                                    <NavDropdown.Item
                                                                        key={`${subItem.name}-${index}`}
                                                                        href={
                                                                            subItem.link
                                                                        }>
                                                                        <span>
                                                                            {
                                                                                subItem.name
                                                                            }
                                                                        </span>
                                                                        {subItem.items_count ? (
                                                                            <span className="counter ms-1 text-danger">
                                                                                (
                                                                                {
                                                                                    subItem.items_count
                                                                                }

                                                                                )
                                                                            </span>
                                                                        ) : null}
                                                                    </NavDropdown.Item>
                                                                );
                                                            },
                                                        )}
                                                    </NavDropdown>
                                                ),
                                            );
                                        } else {
                                            return dropdownClasses.map(
                                                (className, index) => (
                                                    <NavDropdown
                                                        key={`${item.name}-${index}`}
                                                        className={className}
                                                        title={item.name}>
                                                        {item.submenu.map(
                                                            (subItem, index) => {
                                                                return (
                                                                    <NavDropdown.Item
                                                                        key={`${subItem.name}-${index}`}
                                                                        href={
                                                                            subItem.link
                                                                        }>
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </NavDropdown.Item>
                                                                );
                                                            },
                                                        )}
                                                    </NavDropdown>
                                                ),
                                            );
                                        }
                                    } else {
                                        return (
                                            <Nav.Item key={item.name}>
                                                <Nav.Link href={item.link}>
                                                    {item.name}
                                                    {item.items_count ? (
                                                        <span className="counter ms-1 text-red">
                                                            ({item.items_count})
                                                        </span>
                                                    ) : null}
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    }
                                })}
                        </Nav>

                        {menu && (
                            <Nav
                                className={`ms-auto d-none d-${expand}-flex user-name-dropdown`}>
                                <NavDropdown
                                    align={"end"}
                                    title={menu.user_name}>
                                    {menu.user_links.map((link) => {
                                        if (link.link === "/logout") {
                                            return (
                                                <NavDropdown.Item
                                                    key={link.name}
                                                    href="#"
                                                    onClick={handleLogout}>
                                                    {link.img && (
                                                        <img
                                                            className="icon"
                                                            src={link.img.url}
                                                            alt={link.img.alt}
                                                        />
                                                    )}
                                                    {link.name}
                                                </NavDropdown.Item>
                                            );
                                        }
                                        return (
                                            <NavDropdown.Item key={link.name} href={link.link}>
                                                {link.img && (
                                                    <img
                                                        className="icon"
                                                        src={link.img.url}
                                                        alt={link.img.alt}
                                                    />
                                                )}
                                                {link.name}
                                            </NavDropdown.Item>
                                        );
                                    })}
                                </NavDropdown>
                            </Nav>
                        )}

                        {menu && (
                            <Nav className={`ms-auto d-${expand}-none`}>
                                <hr />
                                <Nav.Item className="user-name">
                                    {menu.user_name}
                                </Nav.Item>
                                {menu.user_links.map((link) => {
                                    if (link.link === "/logout") {
                                        return (
                                            <Nav.Item key={link.name}>
                                                <Nav.Link
                                                    href="#"
                                                    onClick={handleLogout}>
                                                    {link.img && (
                                                        <img
                                                            className="icon"
                                                            src={link.img.url}
                                                            alt={link.img.alt}
                                                        />
                                                    )}
                                                    {link.name}
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    }
                                    return (
                                        <Nav.Item key={link.name}>
                                            <Nav.Link href={link.link}>
                                                {link.img && (
                                                    <img
                                                        className="icon"
                                                        src={link.img.url}
                                                        alt={link.img.alt}
                                                    />
                                                )}
                                                {link.name}
                                            </Nav.Link>
                                        </Nav.Item>
                                    );
                                })}
                            </Nav>
                        )}

                        <form
                            id="logout-form"
                            action="/logout"
                            method="POST"
                            hidden
                        />
                    </Navbar.Collapse>
                </div>
            </Container>
            <hr className="additional-border" />
        </Navbar>
    );
};

export default NavBar;
