import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Users,
    TrendingUp,
    Target,
    Award,
    AlertCircle,
    CheckCircle2,
    Shield,
    Zap,
    Briefcase,
    Activity,
    Lock,
    Search
} from 'lucide-react';

const StaffPerformance = () => {
    const { hash } = useLocation();

    // Scroll to hash on load
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    const staffData = [
        {
            name: "Maria Santos",
            role: "Warehouse Supervisor",
            strengths: "Deep operational knowledge.",
            kpis: "Achieve > 98% inventory accuracy and 100% daily check completion.",
            issue: "None currently reported.",
            status: "success",
            icon: Users
        },
        {
            name: "Daniel Reid",
            role: "Inventory Clerk",
            strengths: "Quick learner on hardware.",
            kpis: "Maintain an error rate < 2%.",
            issue: "Recorded an 8% error rate in Week 4 and has skipped two mandatory training sessions.",
            status: "danger",
            icon: AlertCircle
        },
        {
            name: "Liam Jones",
            role: "Warehouse Assistant",
            strengths: "Reliable and punctual.",
            kpis: "Maintain 100% correct barcode scan entries.",
            issue: "None currently reported.",
            status: "success",
            icon: Users
        },
        {
            name: "Hannah (Case C)",
            role: "Admin / Reporting",
            strengths: "Thorough reporting.",
            kpis: "Timely report generation.",
            issue: "Risk of late reports due to slow adoption of new software.",
            status: "warning",
            icon: Briefcase
        }
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '100px' }}>

            {/* HERO SECTION - LIGHT GREEN THEME */}
            <section style={{
                background: '#f0fdf4', // Light Green
                padding: '100px 0 120px',
                color: '#14532d', // Dark Green
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    background: 'radial-gradient(circle at top right, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
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
                    <div className="badge" style={{ background: '#fff', border: '1px solid #bbf7d0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', width: 'fit-content', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield size={16} color="#16a34a" />
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', color: '#15803d', textTransform: 'uppercase' }}>OPERATIONS MANUAL: STAFFING & PERFORMANCE</span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1', color: '#14532d' }}>
                        Staff Performance & <br />
                        <span style={{ color: '#16a34a' }}>KPI Standards</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#166534', maxWidth: '800px', lineHeight: '1.7' }}>
                        The comprehensive guide to managing FreshHarvest Foods' transition to digital inventory systems.
                        Including staff profiles, KPI targets, and documented underperformance cases.
                    </p>
                </div>
            </section>

            <div className="container" style={{ marginTop: '-60px', position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                {/* 1. FRAMEWORK/KPI SECTION */}
                <div id="framework" className="card" style={{ background: '#fff', border: 'none', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px' }}>
                            <Activity size={32} color="#16a34a" />
                        </div>
                        <div>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: '700', color: '#64748b' }}>Section 01</span>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#14532d' }}>KPI Standards</h2>
                        </div>
                    </div>

                    <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '3rem', borderLeft: '4px solid #22c55e', paddingLeft: '1.5rem' }}>
                        Monitoring the "Human Factor" variables for simulation scenarios. Each role has specific targets to ensure the SIMS implementation succeeds.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#14532d' }}>
                        <CheckCircle2 color="#22c55e" /> Individual KPI Targets
                    </h3>

                    <div className="grid grid-3" style={{ gap: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {[
                            { name: "Maria Santos", role: "Warehouse Supervisor", target: "Achieve > 98% inventory accuracy and 100% daily check completion." },
                            { name: "Daniel Reid", role: "Inventory Clerk", target: "Maintain an error rate < 2%." },
                            { name: "Liam Jones", role: "Warehouse Assistant", target: "Maintain 100% correct barcode scan entries." }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem', color: '#1e293b' }}>{item.name}</h4>
                                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>{item.role}</span>
                                <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #dcfce7', color: '#166534', fontSize: '0.9rem', fontWeight: '500' }}>
                                    <Target size={16} style={{ marginBottom: '-3px', marginRight: '5px' }} />
                                    {item.target}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. STAFF PROFILES & CASES SECTION */}
                <div id="profiles" style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingLeft: '1rem' }}>
                        <Users size={28} color="#16a34a" />
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#14532d' }}>Documented Underperformance Cases</h2>
                    </div>

                    <div className="grid grid-2" style={{ gap: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                        {staffData.filter(s => s.status === 'danger' || s.status === 'warning').map((staff, i) => (
                            <div key={i} className="card" style={{
                                background: '#fff',
                                border: 'none',
                                padding: '2rem',
                                borderRadius: '20px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '6px',
                                    height: '100%',
                                    background: staff.status === 'danger' ? '#ef4444' : '#f59e0b'
                                }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0, color: '#1e293b' }}>{staff.name}</h3>
                                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{staff.role}</span>
                                    </div>
                                    <div style={{ background: '#f1f5f9', padding: '0.6rem', borderRadius: '12px' }}>
                                        <staff.icon size={24} color={staff.status === 'danger' ? '#ef4444' : '#f59e0b'} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '1.25rem' }}>
                                    <div style={{ background: staff.status === 'danger' ? '#fef2f2' : '#fffbeb', padding: '1rem', borderRadius: '12px', border: `1px solid ${staff.status === 'danger' ? '#fee2e2' : '#fde68a'}` }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '700', color: staff.status === 'danger' ? '#991b1b' : '#92400e', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <AlertCircle size={14} /> CURRENT ISSUE (ACTION REQUIRED)
                                        </div>
                                        <p style={{ fontSize: '0.95rem', color: staff.status === 'danger' ? '#991b1b' : '#92400e', margin: 0, lineHeight: '1.4' }}>
                                            {staff.issue}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. SIMULATION EVENT LOG (Timeline Monitoring) */}
                <div id="event-log-staff" className="card" style={{ background: '#dcfce7', color: '#14532d', padding: '3rem', borderRadius: '24px', marginBottom: '3rem', border: '1px solid #86efac' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <TrendingUp size={32} className="text-emerald-400" color="#16a34a" />
                        <div>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: '700', color: '#15803d' }}>Section 03</span>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#14532d' }}>Simulation Event Log: Timeline Monitoring</h2>
                        </div>
                    </div>

                    <p style={{ fontSize: '1.1rem', color: '#166534', marginBottom: '2rem', maxWidth: '800px' }}>
                        Students must use this log to practice schedule adjustments and impact analysis.
                    </p>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {[
                            { week: "Week 1", event: "API integration issues identified; tasks delayed 3 days.", type: "Delay" },
                            { week: "Week 3", event: "Staff shortage (3 members unavailable); testing delayed 4 days.", type: "Delay" },
                            { week: "Week 5", event: "Formatting errors in supplier data; correction requires 2 days.", type: "Correction" },
                            { week: "Week 7", event: "Unexpected speed-up in configuration; tasks completed 1 day early.", type: "Speed-up", positive: true },
                            { week: "Week 8", event: "Training rescheduled due to high workload; delayed 2 days.", type: "Reschedule" }
                        ].map((item, i) => (
                            <div key={i} className="staff-event-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                background: '#fff',
                                padding: '1.25rem',
                                borderRadius: '12px',
                                border: '1px solid #86efac',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <span style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '800',
                                    color: '#15803d',
                                    background: '#dcfce7',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    minWidth: '90px',
                                    textAlign: 'center'
                                }}>{item.week}</span>
                                <p style={{ margin: 0, color: '#374151', fontSize: '1rem', flex: 1 }}>{item.event}</p>
                                <span style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    color: item.positive ? '#15803d' : '#991b1b',
                                    background: item.positive ? '#dcfce7' : '#fee2e2',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '99px'
                                }}>{item.type}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
                @media (max-width: 768px) {
                    .container { padding: 0 1.5rem !important; }
                    .grid-3, .grid-2 { grid-template-columns: 1fr !important; }
                    h1 { font-size: 2.5rem !important; }
                    .staff-event-item { 
                        flex-direction: column !important; 
                        align-items: flex-start !important; 
                        gap: 1rem !important;
                    }
                    .staff-event-item span {
                        width: 100%;
                        text-align: left;
                    }
                }
            `}</style>
        </div>
    );
};

export default StaffPerformance;
