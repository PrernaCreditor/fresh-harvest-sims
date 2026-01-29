import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    DollarSign,
    Target,
    Server,
    Users,
    Calculator,
    Database,
    FileText,
    Shield,
    CheckCircle2,
    AlertTriangle,
    AlertCircle,
    FileCheck,
    Briefcase,
    Building2,
    Lock
} from 'lucide-react';

const Financials = () => {
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

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
    };

    const budgetBaseline = [
        {
            category: "Total Allocation",
            description: "Overall Project Budget",
            unitCost: "N/A",
            total: 100000,
            notes: "Maximum approved spend",
            icon: DollarSign,
            color: "#16a34a" // Green
        },
        {
            category: "Technical Services",
            description: "IT Vendor (External)",
            unitCost: "60 Hours",
            total: 30000,
            notes: "Technical setup, configuration, API integration",
            icon: Server,
            color: "#15803d" // Darker Green
        },
        {
            category: "Project Management",
            description: "Project Manager (Internal)",
            unitCost: "20% FTE (4 mos)",
            total: 0,
            notes: "Internal coordination, risk mgmt, delivery",
            icon: Users,
            color: "#059669" // Emerald
        },
        {
            category: "Operations",
            description: "Warehouse Staff (10 pax)",
            unitCost: "20 Hrs / person",
            total: 0,
            notes: "Data entry, pilot testing, mandatory training",
            icon: Users,
            color: "#10b981" // Green
        },
        {
            category: "Administration",
            description: "Admin Staff (5 pax)",
            unitCost: "15 Hrs / person",
            total: 0,
            notes: "Training, reporting setup, data validation",
            icon: FileText,
            color: "#f59e0b" // Keep amber for secondary distinction
        },
        {
            category: "Contingency",
            description: "10% Reserve Fund",
            unitCost: "N/A",
            total: 10000,
            notes: "Reserved for technical/integration risks",
            icon: CheckCircle2,
            color: "#6b7280" // Grey
        }
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-animate { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .table-row:hover { background-color: #f0fdf4 !important; }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .container { padding: 0 1.5rem !important; }
                    .event-card {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 1rem !important;
                    }
                    .section-grid {
                        grid-template-columns: 1fr !important;
                    }
                    h1 { font-size: 2.5rem !important; }
                    h2 { font-size: 1.75rem !important; }
                }
            `}</style>

            {/* HERO SECTION - LIGHT GREEN THEME */}
            <section style={{
                background: '#f0fdf4', // Very light green
                padding: '100px 0 80px',
                color: '#14532d', // Dark green text
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 15% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 40%), radial-gradient(circle at 85% 75%, rgba(20, 83, 45, 0.05) 0%, transparent 60%)',
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.4,
                    backgroundImage: 'linear-gradient(#dcfce7 1px, transparent 1px), linear-gradient(90deg, #dcfce7 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="hero-animate">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', padding: '0.75rem 2rem', borderRadius: '99px', border: '1px solid #bbf7d0', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <Building2 size={20} color="#16a34a" />
                            <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: '#15803d', textTransform: 'uppercase' }}>FreshHarvest Foods</span>
                        </div>

                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '900',
                            lineHeight: '1.1',
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em',
                            color: '#14532d'
                        }}>
                            Financial & Resource Management
                        </h1>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '500', color: '#166534', marginBottom: '2rem' }}>
                            Cloud-Based SIMS Implementation <span style={{ opacity: 0.5, margin: '0 0.5rem' }}>|</span> Document Version 1.0
                        </h2>

                        {/* Financial Overview & Objectives */}
                        <div id="budget-overview" style={{
                            background: '#fff',
                            border: '1px solid #bbf7d0',
                            borderRadius: '16px',
                            padding: '2rem',
                            maxWidth: '800px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                            scrollMarginTop: '120px'
                        }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#15803d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <BadgeDollarSignIcon /> 1. Budgetary Constraints
                            </h3>
                            <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.6' }}>
                                The project is strictly allocated a total budget of <strong style={{ color: '#16a34a' }}>AUD $100,000</strong>.
                                A mandatory <strong style={{ color: '#16a34a' }}>10% (AUD $10,000)</strong> contingency fund is reserved for unforeseen technical or integration risks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESOURCE ALLOCATION - LIGHT / WHITE BG */}
            <section id="resource-allocation" style={{ padding: '80px 0', background: '#fff', scrollMarginTop: '80px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#14532d', marginBottom: '1rem' }}>
                            2. Resource Allocation Matrix
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4b5563' }}>
                            The following table outlines the resource distribution and purpose for the implementation.
                        </p>
                    </div>

                    <div style={{
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        overflow: 'hidden',
                        border: '1px solid #dcfce7'
                    }}>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                                <thead>
                                    <tr style={{ background: '#f0fdf4', borderBottom: '1px solid #bbf7d0' }}>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '700', color: '#166534', textTransform: 'uppercase' }}>Resource</th>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '700', color: '#166534', textTransform: 'uppercase' }}>Allocation</th>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '700', color: '#166534', textTransform: 'uppercase' }}>Primary Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-row" style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.5rem', color: '#14532d', fontWeight: '600' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d' }}>
                                                    <Server size={16} />
                                                </div>
                                                IT Vendor (External)
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>60 Hours</td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>Technical setup, configuration, and API integration.</td>
                                    </tr>
                                    <tr className="table-row" style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.5rem', color: '#14532d', fontWeight: '600' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d' }}>
                                                    <Briefcase size={16} />
                                                </div>
                                                Project Manager (Internal)
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>20% of 4-month timeline</td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>Internal coordination, risk management, and delivery.</td>
                                    </tr>
                                    <tr className="table-row" style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.5rem', color: '#14532d', fontWeight: '600' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d' }}>
                                                    <Users size={16} />
                                                </div>
                                                Warehouse Staff (10)
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>20 Hours per person</td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>Data entry, pilot testing, and mandatory training.</td>
                                    </tr>
                                    <tr className="table-row" style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.5rem', color: '#14532d', fontWeight: '600' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                                                    <FileText size={16} />
                                                </div>
                                                Admin Staff (5)
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>15 Hours per person</td>
                                        <td style={{ padding: '1.5rem', color: '#374151' }}>Training, reporting setup, and data validation.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROLES & PROCEDURES - GRID (Added back based on context but styled green) */}
            <section style={{ padding: '80px 0', background: '#f0fdf4' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="section-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        {/* ROLES - Placeholder for structure, keeping it light */}
                        <div id="financial-roles">
                            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#14532d', marginBottom: '1.5rem' }}>
                                Roles Overview
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dcfce7', display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: '#dcfce7', padding: '0.75rem', borderRadius: '8px', height: 'fit-content' }}>
                                        <Briefcase size={20} color="#15803d" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#14532d', marginBottom: '0.25rem' }}>Project Manager</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#374151' }}>Monitor daily spend and approve invoices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COST CONTROL */}
                        <div id="cost-control">
                            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#14532d', marginBottom: '1.5rem' }}>
                                Cost Control
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ borderLeft: '4px solid #16a34a', background: '#fff', padding: '1.5rem', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <CheckCircle2 size={18} color="#16a34a" />
                                        <h4 style={{ fontWeight: '700', color: '#14532d' }}>Green (Within Threshold)</h4>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: '#374151' }}>±5% variance threshold.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENT LOG (SIMULATION TIMELINE) - LIGHT GREEN BG */}
            <section id="event-log" style={{ padding: '100px 0', background: '#dcfce7', color: '#14532d', scrollMarginTop: '80px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#14532d', marginBottom: '1rem' }}>
                            3. Simulation Event Log & Timeline
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#15803d', maxWidth: '600px', margin: '0 auto' }}>
                            Monitor the schedule adjustments and financial impact analysis.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {/* Event Items */}
                        {[
                            { week: "Week 1", event: "API integration issues identified; tasks delayed 3 days.", impact: "Delay" },
                            { week: "Week 3", event: "Staff shortage (3 members unavailable); testing delayed 4 days.", impact: "Delay" },
                            { week: "Week 5", event: "Formatting errors in supplier data; correction requires 2 days.", impact: "Correction" },
                            { week: "Week 7", event: "Unexpected speed-up in configuration; tasks completed 1 day early.", impact: "Speed-up", positive: true },
                            { week: "Week 8", event: "Training rescheduled due to high workload; delayed 2 days.", impact: "Reschedule" }
                        ].map((item, idx) => (
                            <div key={idx} className="event-card" style={{
                                background: '#fff',
                                border: '1px solid #86efac',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ minWidth: '100px', fontWeight: '800', color: '#15803d' }}>{item.week}</div>
                                <div style={{ flex: 1, color: '#374151' }}>{item.event}</div>
                                <div style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '99px',
                                    background: item.positive ? '#dcfce7' : '#fee2e2',
                                    color: item.positive ? '#15803d' : '#991b1b',
                                    fontSize: '0.85rem',
                                    fontWeight: '700'
                                }}>
                                    {item.impact}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const BadgeDollarSignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78" />
        <path d="M12 8v8" />
        <path d="M9.5 10.5c.5-1.5 2.5-1.5 3 0s-2 3-1 4.5 2 1.5 2.5 0" />
    </svg>
)

export default Financials;
