import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogIn, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleDropdownClick = (to, itemId) => {
        navigate(to);
        setTimeout(() => {
            const element = document.getElementById(itemId);
            if (element) {
                const headerHeight = 120; // Account for fixed header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
        setActiveDropdown(null);
    };

    // Dropdown Data

    
    const privacyList = [
        { id: "background", label: "1. Background and Rationale" },
        { id: "objectives", label: "2. Project Objectives" },
        { id: "scope", label: "3. Scope of the Project" },
        { id: "deliverables", label: "4. Key Deliverables" },
        { id: "stakeholders", label: "5. Stakeholders" },
        { id: "constraints-risks", label: "6. Constraints and Risks" },
        { id: "standards-policies", label: "7. Applicable Standards and Policies" },
        { id: "success-criteria", label: "8. Success Criteria" },
        { id: "timeline-events", label: "9. Timeline Progress Events" },
        { id: "change-control", label: "10. Change Control Process" },
        { id: "continuous-improvement", label: "11. Continuous Improvement Opportunities" },
        { id: "project-closure", label: "12. Project Closure Requirements" },
        { id: "project-authorization", label: "13. Project Authorization" }
    ];
    const financialList = [
        { id: "budget-overview", label: "1. Budget Overview" },
        { id: "resource-allocation", label: "2. Resource Allocations" },
        { id: "event-log", label: "3. Simulation Event Log" }
    ];

    const staffList = [
        { id: "framework", label: "1. KPI Standards" },
        { id: "profiles", label: "2. Underperformance Cases" },
        { id: "event-log-staff", label: "3. Simulation Event Log" }
    ];

    const risksList = [
        { id: "introduction", label: "1. Document Purpose" },
        { id: "strategic-alignment", label: "2. Alignment & Compliance" },
        { id: "risk-principles", label: "3. Risk Principles" },
        { id: "roles", label: "4. Roles & Responsibilities" },
        { id: "risk-appetite", label: "5. Risk Appetite" },
        { id: "risk-process", label: "6. Risk Process (ISO 31000)" },
        { id: "identified-risks", label: "7. Critical Project Risks" },
        { id: "recordkeeping", label: "8. Documentation & Retention" }
    ];


    // Navigation Links
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/privacy", label: "Policies", dropdownId: "privacy", items: privacyList },
        { to: "/financial", label: "Financial & Resources", dropdownId: "financial", items: financialList },
        { to: "/staff", label: "Staff Performance", dropdownId: "staff", items: staffList },
        { to: "/risks", label: "Risk Management Framework", dropdownId: "risks", items: risksList }
    ];

    return (
        <>
            <div className="simulation-banner" style={{ borderBottomColor: '#22c55e', background: '#000' }}>
                <span style={{ color: '#4ade80' }}>Fresh Harvest:</span> Farm to Table Delivery.
            </div>
            <header className="navbar">
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: '#15803d', color: 'white', padding: '0.75rem', borderRadius: '12px', display: 'flex' }}>
                        <LayoutDashboard size={28} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#14532d', letterSpacing: '0.05em', lineHeight: '1.2', fontFamily: 'Outfit' }}>
                            Fresh Harvest
                        </div>
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="nav-desktop-only">
                            Quality Organic Produce
                        </div>
                    </div>
                </NavLink>

                <nav className="nav-links">
                    {navLinks.map(link => {
                        if (link.dropdownId) {
                            return (
                                <div
                                    key={link.to}
                                    style={{ position: 'relative' }}
                                    onMouseEnter={() => setActiveDropdown(link.dropdownId)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                        style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#14532d' }}
                                    >
                                        {link.label} <ChevronDown size={14} />
                                    </NavLink>

                                    {activeDropdown === link.dropdownId && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '0',
                                            paddingTop: '1rem', // gap for hover bridge
                                            zIndex: 2000
                                        }}>
                                            <div className="no-scrollbar" style={{
                                                background: '#fff',
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
                                                border: '1px solid #dcfce7',
                                                width: '260px',
                                                overflow: 'hidden',
                                                maxHeight: '80vh',
                                                overflowY: 'auto'
                                            }}>
                                                {link.items.map(item => (
                                                    <button
                                                        onClick={() => handleDropdownClick(link.to, item.id)}
                                                        key={item.id}
                                                        className="dropdown-item"
                                                        style={{
                                                            display: 'block',
                                                            width: '100%',
                                                            padding: '0.75rem 1rem',
                                                            color: '#14532d', // Dark green text
                                                            textDecoration: 'none',
                                                            fontSize: '0.9rem',
                                                            borderBottom: '1px solid #f0fdf4',
                                                            transition: 'background 0.2s ease',
                                                            background: 'none',
                                                            border: 'none',
                                                            textAlign: 'left',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        {item.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                style={{ color: '#14532d' }} // Standard Override
                            >
                                {link.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#14532d',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                    className="nav-mobile-toggle"
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    zIndex: 1500,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#14532d', fontFamily: 'Outfit' }}>Fresh Harvest</span>
                        <button onClick={toggleMenu} style={{ background: 'none', border: 'none' }}><X size={32} color="#14532d" /></button>
                    </div>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {navLinks.map(link => (
                            <div key={link.to}>
                                <NavLink
                                    to={link.to}
                                    onClick={!link.dropdownId ? closeMenu : undefined}
                                    style={{ fontSize: '1.25rem', fontWeight: '700', color: '#14532d' }}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {link.label}
                                </NavLink>
                                {link.dropdownId && (
                                    <div style={{ paddingLeft: '1rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {link.items.map(item => (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    handleDropdownClick(link.to, item.id);
                                                    closeMenu();
                                                }}
                                                style={{ 
                                                    fontSize: '0.95rem', 
                                                    color: '#15803d', 
                                                    textDecoration: 'none',
                                                    background: 'none',
                                                    border: 'none',
                                                    textAlign: 'left',
                                                    cursor: 'pointer',
                                                    padding: 0
                                                }}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .nav-desktop-only { display: none; }
                    .nav-mobile-toggle { display: block !important; }
                    .nav-links, .nav-cta { display: none !important; }
                    .navbar { top: 0 !important; }
                }
                .dropdown-item:hover {
                    background-color: #f0fdf4 !important;
                    color: #14532d !important;
                }
                .nav-item.active {
                    color: #15803d !important;
                }
                .nav-item.active::after {
                    background: #15803d !important;
                }
                .nav-item:hover {
                    color: #15803d !important;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
};

export default Header;
