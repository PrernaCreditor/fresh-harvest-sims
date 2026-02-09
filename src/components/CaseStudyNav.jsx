import React, { useState, useMemo } from 'react';
import { Hash, Search, FileText, Target, Users, AlertTriangle, TrendingUp, Calendar, Briefcase, Lock, RefreshCw } from 'lucide-react';

const CaseStudyNav = ({ activeSection, onSectionClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const navItems = [
        { id: 'background', label: 'Background and Rationale', icon: FileText },
        { id: 'objectives', label: 'Project Objectives', icon: Target },
        { id: 'scope', label: 'Project Scope', icon: Briefcase },
        { id: 'deliverables', label: 'Key Deliverables', icon: FileText },
        { id: 'stakeholders', label: 'Stakeholders & Suppliers', icon: Users },
        { id: 'constraints-risks', label: 'Constraints and Risks', icon: AlertTriangle },
        { id: 'standards-policies', label: 'Standards and Policies', icon: Lock },
        { id: 'success-criteria', label: 'Success Criteria', icon: TrendingUp },
        { id: 'timeline-events', label: 'Timeline Events', icon: Calendar },
        { id: 'change-control', label: 'Change Control', icon: RefreshCw },
        { id: 'project-closure', label: 'Project Closure', icon: Briefcase },
        { id: 'project-authorization', label: 'Project Authorization', icon: Lock }
    ];

    const filteredItems = useMemo(() => {
        if (!searchTerm) return navItems;
        
        const lowerSearchTerm = searchTerm.toLowerCase();
        return navItems.filter(item => 
            item.label.toLowerCase().includes(lowerSearchTerm) ||
            item.id.toLowerCase().includes(lowerSearchTerm)
        );
    }, [searchTerm]);

    const handleNavClick = (itemId) => {
        const element = document.getElementById(itemId);
        if (element) {
            const headerHeight = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        onSectionClick(itemId);
    };

    const getIcon = (iconComponent) => {
        const Icon = iconComponent;
        return <Icon size={16} />;
    };

    return (
        <div style={{
            position: 'sticky',
            top: '100px',
            width: '320px',
            background: '#fff',
            borderRadius: '16px',
            padding: '1.6rem',
            border: '1px solid #e2e8f0',
            height: 'fit-content',
            maxHeight: 'calc(100vh - 120px)',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            {/* Search Bar */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Search size={18} color="#94a3b8" style={{
                        position: 'absolute',
                        left: '12px',
                        zIndex: 1
                    }} />
                    <input
                        type="text"
                        placeholder="Search sections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem 0.75rem 2.5rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '10px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            color: '#374151',
                            background: '#f8fafc',
                            outline: 'none',
                            transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#16a34a';
                            e.target.style.background = '#fff';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#e2e8f0';
                            e.target.style.background = '#f8fafc';
                        }}
                    />
                </div>
                {searchTerm && (
                    <div style={{
                        marginTop: '0.5rem',
                        fontSize: '0.75rem',
                        color: '#64748b'
                    }}>
                        Found {filteredItems.length} of {navItems.length} sections
                    </div>
                )}
            </div>
            
            {/* Navigation Items */}
            <nav 
                ref={(navRef) => {
                    if (navRef && activeSection) {
                        const activeElement = navRef.querySelector(`[data-section-id="${activeSection}"]`);
                        if (activeElement) {
                            setTimeout(() => {
                                activeElement.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'nearest',
                                    inline: 'nearest'
                                });
                            }, 100);
                        }
                    }
                }}
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.25rem',
                    maxHeight: 'calc(100vh - 280px)',
                    overflowY: 'hidden',
                    scrollBehavior: 'smooth'
                }}
            >
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => {
                        const originalIndex = navItems.findIndex(navItem => navItem.id === item.id);
                        return (
                            <button
                                key={item.id}
                                data-section-id={item.id}
                                onClick={() => handleNavClick(item.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.875rem 1rem',
                                    background: activeSection === item.id ? '#f0fdf4' : 'transparent',
                                    border: activeSection === item.id ? '1px solid #bbf7d0' : '1px solid transparent',
                                    borderRadius: '10px',
                                    color: activeSection === item.id ? '#16a34a' : '#64748b',
                                    fontSize: '0.85rem',
                                    fontWeight: activeSection === item.id ? '600' : '500',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    width: '100%'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '6px',
                                    background: activeSection === item.id ? '#16a34a' : '#f1f5f9',
                                    color: activeSection === item.id ? '#fff' : '#64748b',
                                    flexShrink: 0
                                }}>
                                    {getIcon(item.icon)}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ 
                                        fontWeight: activeSection === item.id ? '600' : '500',
                                        fontSize: '0.85rem',
                                        lineHeight: '1.3'
                                    }}>
                                        {item.label}
                                    </div>
                                    <div style={{ 
                                        fontSize: '0.7rem', 
                                        color: activeSection === item.id ? '#16a34a' : '#94a3b8',
                                        marginTop: '0.1rem'
                                    }}>
                                        Section {String(originalIndex + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </button>
                        );
                    })
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem 1rem',
                        color: '#94a3b8',
                        fontSize: '0.85rem'
                    }}>
                        <div style={{ marginBottom: '0.5rem' }}>🔍</div>
                        <div>No sections found</div>
                        <div style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
                            Try a different search term
                        </div>
                    </div>
                )}
            </nav>
            
            
        </div>
    );
};

export default CaseStudyNav;
