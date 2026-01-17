import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaChartLine, FaRocket, FaUserGraduate, FaBriefcase, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const features = [
        {
            icon: FaBrain,
            title: 'Skill Intelligence',
            description: 'AI-powered analysis of your academic and professional skills to identify strengths and gaps.',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: FaChartLine,
            title: 'Career Pathways',
            description: 'Personalized career recommendations based on your unique skill profile and goals.',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            icon: FaRocket,
            title: 'Skill Development',
            description: 'Curated learning paths and resources to help you achieve your career objectives.',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            icon: FaUserGraduate,
            title: 'Academic Focus',
            description: 'Specialized insights for healthcare and medical education pathways.',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
            icon: FaBriefcase,
            title: 'Professional Growth',
            description: 'Track your professional development and stay competitive in your field.',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            icon: FaLightbulb,
            title: 'Smart Recommendations',
            description: 'Get actionable insights and recommendations tailored to your career stage.',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        }
    ];

    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Hero Section */}
            <section className="flex-center" style={{ 
                minHeight: 'calc(100vh - 100px)', 
                padding: '2rem 1.5rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'float 8s ease-in-out infinite reverse'
                }}></div>

                <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div className="animate-fade-in">
                        <h1 className="text-gradient" style={{ 
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
                            marginBottom: '1.5rem',
                            fontWeight: '800',
                            lineHeight: '1.1'
                        }}>
                            Healthcare Academic & Professional<br />Skill Intelligence System
                        </h1>
                        <p style={{ 
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
                            color: 'var(--text-muted)', 
                            marginBottom: '3rem',
                            maxWidth: '800px',
                            margin: '0 auto 3rem'
                        }}>
                            Unlock your potential with AI-powered skill analysis and personalized career guidance 
                            tailored for healthcare professionals and students.
                        </p>
                        
                        <div style={{ 
                            display: 'flex', 
                            gap: '1.5rem', 
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '4rem'
                        }}>
                            <Link 
                                to="/signup" 
                                className="glass-button"
                                style={{ 
                                    background: 'var(--gradient-main)', 
                                    borderColor: 'transparent',
                                    fontSize: '1.1rem',
                                    padding: '1rem 2.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    textDecoration: 'none',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
                                }}
                            >
                                Get Started <FaArrowRight />
                            </Link>
                            <Link 
                                to="/signin" 
                                className="glass-button"
                                style={{ 
                                    fontSize: '1.1rem',
                                    padding: '1rem 2.5rem',
                                    textDecoration: 'none'
                                }}
                            >
                                Sign In
                            </Link>
                        </div>

                        {/* Stats Section */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '2rem',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            {[
                                { number: '10K+', label: 'Active Users' },
                                { number: '500+', label: 'Career Paths' },
                                { number: '95%', label: 'Success Rate' }
                            ].map((stat, index) => (
                                <div key={index} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <div className="text-gradient" style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                                        {stat.number}
                                    </div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '6rem 1.5rem', background: 'rgba(0, 0, 0, 0.2)' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
                            Powerful Features
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            Everything you need to excel in your healthcare career journey
                        </p>
                    </div>

                    <div className="grid-cols-auto">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="glass-panel"
                                style={{ 
                                    padding: '2rem',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                                    opacity: 0
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: feature.gradient,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    fontSize: '1.5rem',
                                    color: 'white'
                                }}>
                                    <feature.icon />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="flex-center" style={{ padding: '6rem 1.5rem' }}>
                <div className="glass-panel" style={{ 
                    padding: '4rem 2rem', 
                    textAlign: 'center',
                    maxWidth: '800px',
                    width: '100%'
                }}>
                    <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
                        Ready to Transform Your Career?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                        Join thousands of healthcare professionals who have discovered their true potential
                    </p>
                    <Link 
                        to="/signup" 
                        className="glass-button"
                        style={{ 
                            background: 'var(--gradient-main)', 
                            borderColor: 'transparent',
                            fontSize: '1.1rem',
                            padding: '1rem 2.5rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            textDecoration: 'none',
                            boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        Start Your Journey <FaArrowRight />
                    </Link>
                </div>
            </section>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
};

export default Home;
