import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', path: '/#features' },
            { name: 'Dashboard', path: '/dashboard' },
            { name: 'Assessment', path: '/assessment' },
            { name: 'Recommendations', path: '/recommendations' }
        ],
        company: [
            { name: 'About Us', path: '/#about' },
            { name: 'Careers', path: '/#careers' },
            { name: 'Blog', path: '/#blog' },
            { name: 'Contact', path: '/#contact' }
        ],
        resources: [
            { name: 'Documentation', path: '/#docs' },
            { name: 'Help Center', path: '/#help' },
            { name: 'Privacy Policy', path: '/#privacy' },
            { name: 'Terms of Service', path: '/#terms' }
        ]
    };

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: FaEnvelope, url: 'mailto:contact@hapsis.com', label: 'Email' }
    ];

    return (
        <footer className="glass-panel" style={{
            marginTop: '4rem',
            padding: '3rem 1.5rem 1.5rem',
            borderRadius: '0',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: 'none'
        }}>
            <div className="container-custom">
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand Section */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'var(--gradient-main)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: '700'
                            }}>
                                H
                            </div>
                            <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                                HAPSIS
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Empowering healthcare professionals with AI-driven skill intelligence and career guidance.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="glass-button"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        padding: '0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.1rem',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 style={{
                            color: 'var(--text-main)',
                            fontSize: '1.1rem',
                            marginBottom: '1rem',
                            fontWeight: '600'
                        }}>
                            Product
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {footerLinks.product.map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 style={{
                            color: 'var(--text-main)',
                            fontSize: '1.1rem',
                            marginBottom: '1rem',
                            fontWeight: '600'
                        }}>
                            Company
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {footerLinks.company.map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 style={{
                            color: 'var(--text-main)',
                            fontSize: '1.1rem',
                            marginBottom: '1rem',
                            fontWeight: '600'
                        }}>
                            Resources
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {footerLinks.resources.map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                        © {currentYear} HAPSIS. All rights reserved.
                    </p>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        margin: 0
                    }}>
                        Made with <FaHeart style={{ color: 'var(--secondary)' }} /> for healthcare professionals
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
