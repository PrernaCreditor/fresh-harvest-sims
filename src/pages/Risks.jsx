import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    ShieldAlert,
    Target,
    RefreshCw,
    Gauge,
    Table,
    MessageCircle,
    FileText,
    ShieldCheck,
    AlertTriangle,
    Eye,
    Shield, // Added for hero
    AlertOctagon, // Added for critical
    Activity // Added for monitoring
} from 'lucide-react';

const RiskSection = ({ id, title, icon: Icon, children }) => (
    <div id={id} style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '2.5rem',
        marginBottom: '2rem',
        border: '1px solid #bbf7d0', // Very light green border
        scrollMarginTop: '100px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
                background: '#dcfce7', // Light green bg
                padding: '0.75rem',
                borderRadius: '12px',
                color: '#16a34a' // Green icon
            }}>
                <Icon size={24} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#14532d', margin: 0 }}>
                {title}
            </h2>
        </div>
        <div style={{ color: '#374151', lineHeight: '1.7', fontSize: '1rem' }}>
            {children}
        </div>
    </div>
);

const Risks = () => {
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
        <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <style>{`
                @media (max-width: 768px) {
                    .container { padding: 0 1.5rem !important; }
                    .step-grid { grid-template-columns: 1fr !important; }
                    h1 { font-size: 2.5rem !important; }
                }
            `}</style>
            {/* HERO SECTION - LIGHT GREEN THEME */}
            <div style={{
                background: '#f0fdf4',
                padding: '100px 0 80px',
                color: '#14532d',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.05) 0%, transparent 40%)',
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

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#fff', padding: '0.5rem 1rem', borderRadius: '99px', marginBottom: '2rem', border: '1px solid #bbf7d0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <ShieldAlert size={16} color="#16a34a" />
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.1em', color: '#15803d', textTransform: 'uppercase' }}>CORPORATE POLICY • VERSION 1.1</span>
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                        color: '#14532d'
                    }}>
                        Organisational Risk <br />
                        <span style={{ color: '#16a34a' }}>Management Framework</span>
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: '#166534', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        FreshHarvest Foods’ systematic approach to managing uncertainty, compliance, and operational integrity for the SIMS project.
                    </p>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* 1. Introduction and Purpose */}
                <RiskSection id="introduction" title="1. Document Purpose" icon={ShieldCheck}>
                    <p>
                        This framework describes FreshHarvest Foods’ approach to identifying, assessing, treating, monitoring, and reviewing risks that impact food safety, operational continuity, and major strategic projects such as the Smart Inventory Management System (SIMS) implementation. It ensures that all uncertainty is managed in a structured manner to protect FreshHarvest’s AUD $15 million annual turnover and high-value client base.
                    </p>
                </RiskSection>

                {/* 2. Alignment and Compliance */}
                <RiskSection id="strategic-alignment" title="2. Alignment and Compliance" icon={Target}>
                    <p style={{ marginBottom: '1rem' }}>FreshHarvest adheres to the following standards to ensure international and local compliance:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><strong>ISO 31000:2018:</strong> Risk Management Guidelines.</li>
                        <li><strong>ISO 9001:2015:</strong> Quality Management Systems.</li>
                        <li><strong>AS/NZS ISO 10006:2018:</strong> Guidelines for Quality Management in Projects.</li>
                        <li><strong>FSANZ:</strong> Food Safety Standards.</li>
                    </ul>
                </RiskSection>

                {/* 3. Risk Management Principles */}
                <RiskSection id="risk-principles" title="3. Risk Management Principles" icon={Gauge}>
                    <p style={{ marginBottom: '1rem' }}>Our approach is:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><strong>Integrated:</strong> Risk management is part of all organizational activities, from the warehouse floor to executive decision-making.</li>
                        <li><strong>Structured and Comprehensive:</strong> Consistent methods are used to ensure comparable and reliable results.</li>
                        <li><strong>Based on Best Available Information:</strong> Reliant on timely, accurate data from system logs, incident reports, and staff feedback.</li>
                    </ul>
                </RiskSection>

                {/* 4. Roles and Responsibilities */}
                <RiskSection id="roles" title="4. Roles and Responsibilities for SIMS Project" icon={Table}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { role: "Executive Management", desc: "Sets strategic risk direction and provides final approval for major treatments or high-cost mitigations." },
                            { role: "Operations Manager (Project Sponsor)", desc: "Oversees all project risk activities and approves critical escalations, particularly those impacting food safety or system fulfillment." },
                            { role: "Project Manager", desc: "Maintains the Project Risk Register, coordinates regular consultation, and ensures the risk treatment plans are executed according to the 4-month timeline." },
                            { role: "Warehouse & Admin Staff", desc: "Responsible for identifying operational risks on the ground and reporting data inaccuracies or system deviations immediately." },
                            { role: "IT Consultants / Vendors", desc: "Responsible for technical risk assessments, ensuring secure API integration, and mitigating cybersecurity threats." }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
                                <strong style={{ color: '#14532d', display: 'block', marginBottom: '0.25rem' }}>{item.role}</strong>
                                <span style={{ color: '#374151' }}>{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </RiskSection>

                {/* 5. Organisational Risk Appetite */}
                <RiskSection id="risk-appetite" title="5. Organisational Risk Appetite" icon={Activity}>
                    <p style={{ marginBottom: '1.5rem' }}>Our appetite for risk is defined as follows:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
                            <div style={{ color: '#b91c1c', fontWeight: '800', marginBottom: '0.25rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>Low Tolerance (Avoid)</div>
                            <div style={{ color: '#7f1d1d' }}>Food safety breaches, data inaccuracies (&gt;2% error rate), and system failures that interrupt order fulfillment to supermarkets and restaurants.</div>
                        </div>
                        <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '12px', padding: '1.25rem' }}>
                            <div style={{ color: '#c2410c', fontWeight: '800', marginBottom: '0.25rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>Moderate Tolerance (Manage)</div>
                            <div style={{ color: '#7c2d12' }}>Minor technology implementation challenges and schedule delays that do not exceed the 10% project contingency.</div>
                        </div>
                    </div>
                </RiskSection>

                {/* 6. The Risk Process (ISO 31000) */}
                <RiskSection id="risk-process" title="6. The Risk Process (ISO 31000)" icon={RefreshCw}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { stage: "Establish Context", action: "Considers regulatory (FSANZ), operational (warehouse), and stakeholder expectations." },
                            { stage: "Identify Risks", action: "Uses incident reports, staff feedback (e.g., Daniel’s error rates), and data audits." },
                            { stage: "Analyse Risks", action: "Evaluates the likelihood of an event and its impact on food safety and financial stability." },
                            { stage: "Evaluate Risks", action: "Prioritizes risks for treatment; any risk compromising food safety is escalated immediately." },
                            { stage: "Treat Risks", action: "Includes enhancing training, implementing automated supplier data validation, or increasing system redundancy." }
                        ].map((step, i) => (
                            <div key={i} className="step-grid" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
                                <div style={{ fontWeight: '700', color: '#14532d' }}>{step.stage}</div>
                                <div style={{ color: '#374151' }}>{step.action}</div>
                            </div>
                        ))}
                    </div>
                </RiskSection>

                {/* 7. Critical Project Risks for SIMS Rollout */}
                <RiskSection id="identified-risks" title="7. Critical Project Risks for SIMS Rollout" icon={AlertTriangle}>
                    <p style={{ marginBottom: '1.5rem' }}>Based on our current project phase, the following risks must be managed:</p>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { title: "System Integration Failure", desc: "API incompatibility with legacy supplier platforms leading to 3+ day delays." },
                            { title: "Human Error during Migration", desc: "Manual data migration from paper logs resulting in <98% accuracy." },
                            { title: "Staff Underperformance", desc: "Resistance to new digital scanning hardware or non-attendance at mandatory training sessions." }
                        ].map((risk, i) => (
                            <div key={i} style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>{i + 1}. {risk.title}</div>
                                <div style={{ color: '#475569' }}>{risk.desc}</div>
                            </div>
                        ))}
                    </div>
                </RiskSection>

                {/* 8. Documentation and Retention */}
                <RiskSection id="recordkeeping" title="8. Documentation and Retention" icon={FileText}>
                    <p>
                        All risk-related documentation, including Risk Registers, Corrective Action Reports, and training attendance logs, must be retained for a minimum of 5 years to satisfy food safety and project audit requirements.
                    </p>
                </RiskSection>

            </div>
        </div>
    );
};

export default Risks;
