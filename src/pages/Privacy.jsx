import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    ShieldCheck,
    Target,
    ListChecks,
    Box,
    Users,
    AlertTriangle,
    FileText,
    TrendingUp,
    RefreshCw,
    CheckCircle2,
    Calendar,
    Briefcase,
    Zap,
    Lock,
    ClipboardCheck
} from 'lucide-react';
import CaseStudyNav from '../components/CaseStudyNav';

const CaseStudySection = ({ id, title, icon: Icon, children }) => (
    <div id={id} style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '2.5rem',
        marginBottom: '2rem',
        border: '1px solid #bbf7d0',
        scrollMarginTop: '100px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
                background: '#dcfce7',
                padding: '0.75rem',
                borderRadius: '12px',
                color: '#16a34a'
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

const CaseStudy = () => {
    const { hash } = useLocation();
    const [activeSection, setActiveSection] = useState('background');

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
                setActiveSection(hash.replace('#', ''));
            }
        }
    }, [hash]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'background', 'objectives', 'scope', 'deliverables', 'stakeholders', 
                'constraints-risks', 'standards-policies', 'success-criteria', 
                'timeline-events', 'change-control', 'project-closure', 'project-authorization'
            ];
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <style>{`
                @media (max-width: 1024px) {
                    .nav-sidebar { display: none !important; }
                    .main-content { max-width: 100% !important; }
                }
                @media (max-width: 768px) {
                    .container { padding: 0 1.5rem !important; }
                    .grid-2 { grid-template-columns: 1fr !important; }
                    h1 { font-size: 2.5rem !important; }
                }
            `}</style>

            {/* HERO SECTION */}
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
                
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#fff', padding: '0.5rem 1rem', borderRadius: '99px', marginBottom: '2rem', border: '1px solid #bbf7d0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <Briefcase size={16} color="#16a34a" />
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.1em', color: '#15803d', textTransform: 'uppercase' }}>Project Documentation • Case Study 2</span>
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                        color: '#14532d'
                    }}>
                        FreshHarvest Foods <br />
                        <span style={{ color: '#16a34a' }}>Smart Inventory System</span>
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: '#166534', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        Transforming manual food distribution into a high-accuracy, cloud-based digital operation.
                    </p>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', gap: '2rem' }}>
                {/* Left Navigation */}
                <div className="nav-sidebar" style={{ flexShrink: 0, display: 'block' }}>
                    <CaseStudyNav 
                        activeSection={activeSection} 
                        onSectionClick={setActiveSection} 
                    />
                </div>

                {/* Main Content */}
                <div className="main-content" style={{ flex: 1, minWidth: 0 }}>

                {/* 1. Background and Rationale */}
                <CaseStudySection id="background" title="Background and Rationale" icon={ShieldCheck}>
                    <p style={{ marginBottom: '1rem' }}>
                        FreshHarvest Foods is a medium-sized food distribution company supplying fresh produce to supermarkets and restaurants. 
                        Inventory is currently tracked via manual spreadsheets and paper logs, leading to <strong>stock discrepancies, overstocking, and spoilage.</strong>
                    </p>
                    <p style={{ marginBottom: '1rem' }}>The SIMS implementation aims to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>Automate stock tracking and reporting.</li>
                        <li>Reduce food waste and stock errors.</li>
                        <li>Improve compliance with food safety regulations.</li>
                        <li>Generate real-time analytics for inventory decisions.</li>
                    </ul>
                </CaseStudySection>

                {/* 2. Project Objectives */}
                <CaseStudySection id="objectives" title="Project Objectives" icon={Target}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            "Implement a cloud-based SIMS within 4 months.",
                            "Ensure accurate inventory tracking (≥98% data accuracy).",
                            "Comply with food safety and ISO 9001:2015 quality standards.",
                            "Train all warehouse and administrative staff on system use.",
                            "Reduce inventory discrepancies and spoilage by 20% within the first year."
                        ].map((obj, i) => (
                            <div key={i} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #16a34a', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ fontWeight: '900', color: '#16a34a' }}>0{i+1}</span>
                                <span style={{ color: '#374151' }}>{obj}</span>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* 3. Scope */}
                <CaseStudySection id="scope" title="Project Scope" icon={Box}>
                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '12px' }}>
                            <h3 style={{ color: '#14532d', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>Inclusions</h3>
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', color: '#166534', fontSize: '0.9rem' }}>
                                <li>SIMS Software selection (Fishbowl/Zoho)</li>
                                <li>Data migration from paper/logs</li>
                                <li>Ordering system integration</li>
                                <li>Staff training & Pilot testing</li>
                            </ul>
                        </div>
                        <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '12px' }}>
                            <h3 style={{ color: '#991b1b', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>Exclusions</h3>
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', color: '#991b1b', fontSize: '0.9rem' }}>
                                <li>Hardware procurement (Scanners)</li>
                                <li>Supplier/Client training</li>
                                <li>Custom non-standard module dev</li>
                            </ul>
                        </div>
                    </div>
                </CaseStudySection>

                {/* 4. Key Deliverables */}
                <CaseStudySection id="deliverables" title="Key Deliverables" icon={ListChecks}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            "Fully functional SIMS tailored for FreshHarvest Foods.",
                            "User manuals and online help resources.",
                            "Staff training documentation and workshops.",
                            "Accurate migration of existing inventory data.",
                            "Compliance report confirming adherence to food safety and ISO 9001 standards."
                        ].map((deliverable, i) => (
                            <div key={i} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '1rem', 
                                padding: '1rem', 
                                background: '#f8fafc', 
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                borderLeft: '3px solid #16a34a'
                            }}>
                                <div style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    borderRadius: '50%', 
                                    background: '#16a34a', 
                                    color: '#fff', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    fontSize: '0.7rem'
                                }}>
                                    ✓
                                </div>
                                <span style={{ color: '#374151', fontSize: '0.9rem' }}>{deliverable}</span>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* 5. Stakeholders & Suppliers */}
                <CaseStudySection id="stakeholders" title="Stakeholders & Key Suppliers" icon={Users}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { role: "Operations Manager", name: "Project Sponsor", detail: "Approval Authority" },
                            { role: "TechFlow Solutions", name: "IT Vendor", detail: "SIMS Setup" },
                            { role: "Global Dairy Co", name: "Supplier", detail: "CSV Data Integration" },
                            { role: "NSW Fresh Produce", name: "Supplier", detail: "Manual Docket Digitisation" },
                            { role: "Warehouse & Admin", name: "End Users", detail: "System Adopters" }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <div>
                                    <strong style={{ color: '#14532d' }}>{s.role}</strong>
                                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{s.name}</div>
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#16a34a', background: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #bbf7d0', height: 'fit-content' }}>
                                    {s.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* 5. Constraints and Risks */}
                <CaseStudySection id="constraints-risks" title="Constraints and Risks" icon={AlertTriangle}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            { title: "Budget", value: "AUD $100,000", color: "#dc2626" },
                            { title: "Timeline", value: "4 months", color: "#ea580c" },
                            { title: "Staff Resistance", value: "Technology adoption challenges", color: "#d97706" },
                            { title: "Data Migration", value: "Risk of inaccurate data", color: "#ca8a04" },
                            { title: "Integration", value: "Existing system compatibility", color: "#65a30d" },
                            { title: "Security", value: "Cybersecurity & privacy concerns", color: "#16a34a" }
                        ].map((risk, i) => (
                            <div key={i} style={{ 
                                padding: '1.25rem', 
                                borderRadius: '12px', 
                                background: '#fff', 
                                border: `2px solid ${risk.color}20`,
                                borderLeft: `4px solid ${risk.color}`
                            }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: risk.color, textTransform: 'uppercase' }}>{risk.title}</div>
                                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', marginTop: '0.25rem' }}>{risk.value}</div>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* 6. Applicable Standards and Policies */}
                <CaseStudySection id="standards-policies" title="Applicable Standards and Policies" icon={FileText}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            "ISO 9001:2015 Quality Management Systems (general project quality standards)",
                            "AS/NZS ISO 10006:2018 Guidelines for quality management in projects",
                            "Food safety standards (FSANZ or relevant local regulations)",
                            "FreshHarvest internal IT and data governance policies"
                        ].map((standard, i) => (
                            <div key={i} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '1rem', 
                                padding: '1rem', 
                                background: '#f0fdf4', 
                                borderRadius: '8px',
                                border: '1px solid #bbf7d0'
                            }}>
                                <div style={{ 
                                    width: '32px', 
                                    height: '32px', 
                                    borderRadius: '50%', 
                                    background: '#16a34a', 
                                    color: '#fff', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    fontSize: '0.8rem'
                                }}>
                                    {i + 1}
                                </div>
                                <span style={{ color: '#166534', fontSize: '0.9rem' }}>{standard}</span>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* 7. Success Criteria */}
                <CaseStudySection id="success-criteria" title="Success Criteria (KPIs)" icon={TrendingUp}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ background: '#f0f9ff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                            <div style={{ color: '#0369a1', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>Migration</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0c4a6e' }}>≥98%</div>
                            <div style={{ fontSize: '0.8rem', color: '#075985' }}>Data Accuracy</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>Tolerance: ±0.5%</div>
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '1.25rem', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                            <div style={{ color: '#15803d', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>Uptime</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#14532d' }}>99.9%</div>
                            <div style={{ fontSize: '0.8rem', color: '#166534' }}>System Availability</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>During pilot phase</div>
                        </div>
                        <div style={{ background: '#fefce8', padding: '1.25rem', borderRadius: '12px', border: '1px solid #fef08a' }}>
                            <div style={{ color: '#a16207', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>Training</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#713f12' }}>90%</div>
                            <div style={{ fontSize: '0.8rem', color: '#854d0e' }}>Min Assessment Score</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>For system access</div>
                        </div>
                        <div style={{ background: '#fef2f2', padding: '1.25rem', borderRadius: '12px', border: '1px solid #fecaca' }}>
                            <div style={{ color: '#991b1b', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>Spoilage</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#7f1d1d' }}>20%</div>
                            <div style={{ fontSize: '0.8rem', color: '#991b1b' }}>Reduction Target</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>Within 12 months</div>
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>Detailed Requirements</h4>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                "100% of warehouse and administrative staff must complete post-training competency assessments",
                                "Minimum 5% improvement in spoilage reduction by end of first quarter post-launch",
                                "Zero (0) 'Critical' non-conformances in internal audits against ISO 9001 and food safety standards",
                                "Any migration batch with error rate exceeding 2% must be rolled back and re-migrated"
                            ].map((req, i) => (
                                <div key={i} style={{ 
                                    display: 'flex', 
                                    alignItems: 'flex-start', 
                                    gap: '0.75rem', 
                                    padding: '0.75rem', 
                                    background: '#fff', 
                                    borderRadius: '6px',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '0.85rem', color: '#374151', lineHeight: '1.4' }}>{req}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CaseStudySection>

                {/* 6. Timeline Progress Events */}
                <CaseStudySection id="timeline-events" title="Timeline Progress Events" icon={Calendar}>
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '3px solid #dcfce7' }}>
                        {[
                            { wk: "Week 1", ev: "API Integration Issue", imp: "Delayed 3 days." },
                            { wk: "Week 3", ev: "Warehouse Staff Shortage", imp: "Delayed 4 days." },
                            { wk: "Week 5", ev: "Supplier Data Formatting Errors", imp: "Delayed 2 days for correction." },
                            { wk: "Week 7", ev: "SIMS Configuration Speed-up", imp: "Completed 1 day early." },
                            { wk: "Week 8", ev: "Training Rescheduling Request", imp: "Delayed 2 days." }
                        ].map((item, i) => (
                            <div key={i} style={{ marginBottom: '1.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-2.1rem', top: '0.3rem', width: '16px', height: '16px', borderRadius: '50%', background: '#16a34a', border: '3px solid #fff' }}></div>
                                <div style={{ fontWeight: '800', color: '#14532d' }}>{item.wk}: {item.ev}</div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Impact: {item.imp}</div>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* 8. Change Control & Improvement */}
                <CaseStudySection id="change-control" title="Control & Continuous Improvement" icon={RefreshCw}>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Lock size={18} /> Approval Thresholds</h4>
                            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#475569' }}>
                                <li><strong>Project Manager:</strong> Changes with 0 days' impact.</li>
                                <li><strong>Project Sponsor:</strong> Changes &gt; 2 days or impacting budget ($100k).</li>
                            </ul>
                        </div>
                        
                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1rem', fontWeight: '700' }}>Mandatory Processes</h4>
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                {[
                                    "Change Request Form for any scope, timeline, or budget impacts",
                                    "Lessons Learned Register updated at end of each WBS phase",
                                    "Post-Implementation Review (PIR) scheduled 3 months after Go-Live",
                                    "Measurement of 20% spoilage reduction against SIMS data"
                                ].map((process, i) => (
                                    <div key={i} style={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start', 
                                        gap: '0.75rem', 
                                        padding: '0.75rem', 
                                        background: '#f0fdf4', 
                                        borderRadius: '6px'
                                    }}>
                                        <div style={{ 
                                            width: '20px', 
                                            height: '20px', 
                                            borderRadius: '50%', 
                                            background: '#16a34a', 
                                            color: '#fff', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            fontSize: '0.7rem',
                                            flexShrink: 0
                                        }}>
                                            {i + 1}
                                        </div>
                                        <span style={{ fontSize: '0.85rem', color: '#166534', lineHeight: '1.4' }}>{process}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            {[
                                { title: "API Template", type: "Technology", desc: "Standard integration for future regional suppliers." },
                                { title: "Hub Standardisation", type: "Process", desc: "Roll out Hannah Cook's reporting sheet across all sites." },
                                { title: "FSANZ Alerts", type: "Safety", desc: "Auto-alerts 48hrs before 'Use By' dates." }
                            ].map((opp, i) => (
                                <div key={i} style={{ padding: '1rem', background: '#f0fdf4', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '0.7rem', fontWeight: '900', color: '#16a34a', textTransform: 'uppercase' }}>{opp.type}</div>
                                    <div style={{ fontWeight: '700', color: '#14532d' }}>{opp.title}</div>
                                    <div style={{ fontSize: '0.85rem', color: '#166534' }}>{opp.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CaseStudySection>

                {/* 8. Project Closure */}
                <CaseStudySection id="project-closure" title="Closure & Integration" icon={ClipboardCheck}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { t: "Handover", d: "User Manuals & Admin credentials to Maria Santos." },
                            { t: "Financials", d: "Reconcile invoices against $100k budget." },
                            { t: "Sustainability", d: "Verify decommission of paper logs." },
                            { t: "CI Handover", d: "Transfer API Template to Org CI Register." }
                        ].map((c, i) => (
                            <div key={i} style={{ padding: '1rem', border: '1px dashed #bbf7d0', borderRadius: '8px' }}>
                                <div style={{ fontWeight: '700', color: '#15803d' }}>{c.t}</div>
                                <div style={{ fontSize: '0.85rem', color: '#374151' }}>{c.d}</div>
                            </div>
                        ))}
                    </div>
                </CaseStudySection>

                {/* Authorization Footer */}
                <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '2px solid #16a34a' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#16a34a' }}>
                        <Zap size={24} />
                        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '900' }}>Project Authorization</h2>
                    </div>
                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '800' }}>Project Sponsor Signature</div>
                            <div style={{ marginTop: '1.5rem', color: '#14532d', fontWeight: '600' }}>Operations Manager</div>
                        </div>
                        <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '800' }}>Project Manager Signature</div>
                            <div style={{ marginTop: '1.5rem', color: '#14532d', fontWeight: '600' }}>[Candidate Name]</div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default CaseStudy;