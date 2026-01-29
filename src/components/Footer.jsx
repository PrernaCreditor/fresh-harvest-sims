import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Mail, Phone, MapPin, Linkedin, Globe, ShieldAlert } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', textAlign: 'center' }}>

                    {/* Brand & Tagline */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{ background: 'var(--success)', color: 'white', padding: '0.5rem', borderRadius: '8px' }}>
                                <LayoutDashboard size={20} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white', letterSpacing: '-0.02em', fontFamily: 'Outfit' }}>
                                Fresh Harvest
                            </span>
                        </div>
                        <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
                            Systematic approach to managing uncertainty, compliance, and operational integrity for the SIMS project.
                        </p>
                    </div>

                    {/* Compact Links & Copyright */}
                    <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                            <NavLink to="/" style={{ transition: 'var(--transition)' }}>Home</NavLink>
                            <NavLink to="/risks" style={{ transition: 'var(--transition)' }}>Risks</NavLink>
                            <NavLink to="/financial" style={{ transition: 'var(--transition)' }}>Financials</NavLink>
                            <NavLink to="/staff" style={{ transition: 'var(--transition)' }}>Staff</NavLink>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
                            <span>© 2026 Fresh Harvest.</span>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Linkedin size={18} style={{ cursor: 'pointer', opacity: 0.8 }} />
                                <Mail size={18} style={{ cursor: 'pointer', opacity: 0.8 }} />
                            </div>
                        </div>
                    </div>

                </div>
                <style>{`
                    @media (max-width: 768px) {
                        .container div[style*="justify-content: space-between"] {
                            flex-direction: column !important;
                            gap: 1.5rem !important;
                        }
                    }
                `}</style>
            </div>
        </footer>
    );
};

export default Footer;
