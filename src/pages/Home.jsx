import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Target, // Objectives
    Maximize, // Scope
    Users, // Stakeholders
    DollarSign, // Finance
    AlertTriangle, // Risks
    Activity, // Timeline
    ShieldCheck, // Compliance
    CheckCircle2,
    ArrowRight,
    Briefcase,
    Server,
    Database
} from 'lucide-react';

const CharterSection = ({ id, title, icon: Icon, children, className = "" }) => (
    <div id={id} className={`charter-section ${className}`} style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '2.5rem',
        marginBottom: '2rem',
        border: '1px solid #e2e8f0',
        scrollMarginTop: '100px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
            <div style={{
                background: '#f0fdf4',
                padding: '0.75rem',
                borderRadius: '12px',
                color: '#16a34a'
            }}>
                <Icon size={24} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#14532d', margin: 0 }}>
                {title}
            </h2>
        </div>
        <div style={{ color: '#374151', lineHeight: '1.7', fontSize: '1rem' }}>
            {children}
        </div>
    </div>
);

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '100px' }}>

            {/* HERO / EXECUTIVE SUMMARY */}
            <section style={{
                background: '#f0fdf4', // Light Green
                color: '#14532d', // Dark Green
                padding: '80px 0 100px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', padding: '0.5rem 1.5rem', borderRadius: '99px', marginBottom: '2rem', border: '1px solid #bbf7d0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <LayoutDashboard size={18} className="text-emerald-400" color="#16a34a" />
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', color: '#15803d', textTransform: 'uppercase' }}>PROJECT CHARTER & DASHBOARD</span>
                    </div>

                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1', color: '#14532d' }}>
                        Smart Inventory <br />
                        <span style={{ color: '#16a34a' }}>Management System (SIMS)</span>
                    </h1>

                    <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.25rem', color: '#166534', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            <strong style={{ color: '#14532d' }}>Executive Summary:</strong> FreshHarvest Foods faces critical operational risks due to manual inventory tracking.
                            The SIMS project is a strategic initiative to digitize operations, automate reporting, and protect our <strong style={{ color: '#14532d' }}>AUD $15M</strong> annual turnover.
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { label: "Budget", value: "$100,000", sub: "Fixed Allocation", icon: DollarSign, color: "#16a34a" },
                            { label: "Timeline", value: "4 Months", sub: "Hard Deadline", icon: Activity, color: "#d97706" },
                            { label: "Target", value: "98%", sub: "Data Accuracy", icon: Target, color: "#2563eb" },
                            { label: "Scope", value: "Full Rollout", sub: "Cloud-Based", icon: Maximize, color: "#db2777" }
                        ].map((stat, i) => (
                            <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dcfce7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                    <stat.icon size={20} color={stat.color} />
                                    <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>{stat.label}</span>
                                </div>
                                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.25rem' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginTop: '-40px', position: 'relative', zIndex: 10 }}>

                {/* 1. BACKGROUND AND RATIONALE */}
                <CharterSection id="background" title="1. Background and Rationale" icon={Briefcase}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#374151', marginBottom: '1rem' }}>
                            <strong style={{ color: '#14532d' }}>FreshHarvest Foods</strong> is a medium-sized food distribution company supplying fresh produce to supermarkets and restaurants. Currently, inventory is tracked manually using spreadsheets and paper logs, leading to:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {[
                                "Stock discrepancies",
                                "Overstocking issues", 
                                "Food spoilage",
                                "Delays in order fulfillment"
                            ].map((issue, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem',
                                    background: '#fef2f2',
                                    borderRadius: '8px',
                                    border: '1px solid #fee2e2'
                                }}>
                                    <AlertTriangle size={16} color="#dc2626" />
                                    <span style={{ fontSize: '0.9rem', color: '#991b1b', fontWeight: '500' }}>{issue}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#14532d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Target size={18} color="#16a34a" />
                            SIMS Implementation Objectives
                        </h4>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            {[
                                "Automate stock tracking and reporting",
                                "Reduce food waste and stock errors", 
                                "Improve compliance with food safety regulations",
                                "Generate real-time analytics for inventory decisions"
                            ].map((objective, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: '#16a34a',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.7rem',
                                        fontWeight: '700',
                                        flexShrink: 0,
                                        marginTop: '2px'
                                    }}>
                                        {i + 1}
                                    </div>
                                    <span style={{ fontSize: '0.95rem', color: '#166534', lineHeight: '1.5' }}>{objective}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ 
                            marginTop: '1rem', 
                            padding: '1rem', 
                            background: '#fff', 
                            borderRadius: '8px', 
                            border: '1px solid #bbf7d0',
                            fontSize: '0.9rem',
                            color: '#14532d',
                            fontWeight: '500',
                            textAlign: 'center'
                        }}>
                            The project will allow FreshHarvest to streamline processes, improve operational efficiency, and ensure high-quality service delivery to clients.
                        </div>
                    </div>
                </CharterSection>

                {/* 2. OBJECTIVES */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    <CharterSection id="objectives" title="2. Comprehensive Objectives" icon={Target}>
                        <ul style={{ display: 'grid', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                            {[
                                { title: "Rapid Deployment", desc: "Full cloud-based system implementation within a non-negotiable 4-month window." },
                                { title: "Data Integrity", desc: "Achievement of ≥ 98% accuracy in inventory tracking and migration." },
                                { title: "Sustainability", desc: "20% reduction in food spoilage and stock discrepancies within one year." },
                                { title: "Workforce Readiness", desc: "100% competency sign-off for warehouse and admin staff." }
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ marginTop: '4px', minWidth: '6px', height: '6px', borderRadius: '50%', background: '#16a34a' }}></div>
                                    <div>
                                        <strong style={{ color: '#14532d', display: 'block' }}>{item.title}</strong>
                                        <span style={{ fontSize: '0.95rem' }}>{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CharterSection>

                    <CharterSection id="scope" title="3. Detailed Project Scope" icon={Maximize}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#15803d', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle2 size={16} /> Inclusions
                            </h4>
                            <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px', border: '1px solid #dcfce7', fontSize: '0.95rem' }}>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                                    <li>Software Lifecycle (Selection & Config)</li>
                                    <li>Secure API Integration</li>
                                    <li>Data Migration ("Dirty Data" Cleaning)</li>
                                    <li>Phased Regional Pilot Testing</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#b91c1c', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <AlertTriangle size={16} /> Exclusions
                            </h4>
                            <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '12px', border: '1px solid #fee2e2', fontSize: '0.95rem' }}>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                                    <li>New Hardware Procurement (Use existing tablets)</li>
                                    <li>Bespoke Custom Software Development</li>
                                </ul>
                            </div>
                        </div>
                    </CharterSection>
                </div>

                {/* 4. STAKEHOLDERS */}
                <CharterSection id="stakeholders" title="4. Stakeholder Matrix" icon={Users}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: '#64748b', fontWeight: '700' }}>Stakeholder</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: '#64748b', fontWeight: '700' }}>Role</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: '#64748b', fontWeight: '700' }}>Responsibility</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { role: "Operations Manager", type: "Project Sponsor", desc: "Final authority on budget, timeline, strategic approval." },
                                    { role: "Project Manager", type: "Delivery Lead", desc: "Coordination, risk management, reporting." },
                                    { role: "IT Consultant", type: "Technical Partner", desc: "System setup, API integration, post-launch support." },
                                    { role: "Warehouse Manager", type: "Operational Lead", desc: "Staff adoption, on-the-ground processes." },
                                    { role: "Staff (Whse/Admin)", type: "System Users", desc: "Day-to-day data entry, stock tracking, reporting." }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1rem', fontWeight: '700', color: '#0f172a' }}>{row.role}</td>
                                        <td style={{ padding: '1rem', color: '#15803d', fontWeight: '600' }}>{row.type}</td>
                                        <td style={{ padding: '1rem', color: '#475569' }}>{row.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CharterSection>

                {/* 5, 6, 7 SUMMARIES LINKING TO DEEP DIVES */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* FINANCIALS LINK */}
                    <div className="card-hover" style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ marginBottom: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#16a34a' }}>5. Financial Baseline</h3>
                                <DollarSign size={24} color="#16a34a" />
                            </div>
                            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                Rigid $100k budget with 10% contingency. Resource allocation for IT, PM, and Staff training.
                            </p>
                            <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', color: '#14532d', fontWeight: '600', marginBottom: '1.5rem' }}>
                                Total: AUD $100,000 <br /> Contingency: $10,000
                            </div>
                        </div>
                        <Link to="/financial" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#16a34a', color: '#fff', padding: '0.75rem', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s' }}>
                            View Detailed Financials <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* RISKS LINK */}
                    <div className="card-hover" style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ marginBottom: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#dc2626' }}>6. Risk Management</h3>
                                <AlertTriangle size={24} color="#dc2626" />
                            </div>
                            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                ISO 31000 aligned. Critical risks include Integration Failure, Data Accuracy ("Dirty Data"), and Cultural Resistance.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '0.8rem', background: '#fef2f2', color: '#991b1b', padding: '0.25rem 0.75rem', borderRadius: '99px', fontWeight: '700' }}>Integration</span>
                                <span style={{ fontSize: '0.8rem', background: '#fef2f2', color: '#991b1b', padding: '0.25rem 0.75rem', borderRadius: '99px', fontWeight: '700' }}>Migration</span>
                                <span style={{ fontSize: '0.8rem', background: '#fef2f2', color: '#991b1b', padding: '0.25rem 0.75rem', borderRadius: '99px', fontWeight: '700' }}>Staff</span>
                            </div>
                        </div>
                        <Link to="/risks" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#fff', color: '#dc2626', border: '1px solid #dc2626', padding: '0.75rem', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s' }}>
                            View Risk Framework <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* TIMELINE LINK */}
                    <div className="card-hover" style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ marginBottom: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>7. Timeline Events</h3>
                                <Activity size={24} color="#0f172a" />
                            </div>
                            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                "Progress Events" designed to test schedule management. Includes delays, speed-ups, and resource gaps.
                            </p>
                            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span>Week 1: API Delay</span> <span style={{ color: '#dc2626' }}>+3 Days</span>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Week 7: Speed-up</span> <span style={{ color: '#16a34a' }}>-1 Day</span>
                                </div>
                            </div>
                        </div>
                        <button disabled style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#e2e8f0', color: '#94a3b8', padding: '0.75rem', borderRadius: '12px', border: 'none', cursor: 'not-allowed', fontWeight: '600' }}>
                            Integrated in Sections
                        </button>
                    </div>

                </div>

            </div>
            <style>{`
                .charter-section:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    transition: box-shadow 0.3s ease;
                }
                .card-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                @media (max-width: 768px) {
                    .container { padding: 0 1.5rem !important; }
                    h1 { font-size: 2.5rem !important; }
                }
            `}</style>
        </div>
    );
};

export default Home;
