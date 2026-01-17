import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, registration logic would go here
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        navigate('/dashboard');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const InputField = ({ type, name, placeholder, icon: Icon }) => (
        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                zIndex: 1
            }}>
                <Icon />
            </div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="glass-input"
                style={{ paddingLeft: '3rem' }}
                required
            />
        </div>
    );

    return (
        <div className="flex-center" style={{ minHeight: '100vh', padding: '2rem 1.5rem' }}>
            <div className="glass-panel animate-fade-in" style={{
                width: '100%',
                maxWidth: '450px',
                padding: '3rem 2.5rem'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'var(--gradient-main)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1.2rem'
                        }}>
                            H
                        </div>
                        <span className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                            HAPSIS
                        </span>
                    </div>
                    <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                        Create Account
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                        Start your skill intelligence journey
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        icon={FaUser}
                    />
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        icon={FaEnvelope}
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        icon={FaLock}
                    />
                    <InputField
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        icon={FaLock}
                    />

                    {/* Terms and Conditions */}
                    <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        By signing up, you agree to our{' '}
                        <Link to="/terms" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                            Terms of Service
                        </Link>
                        {' '}and{' '}
                        <Link to="/privacy" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                            Privacy Policy
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="glass-button"
                        style={{
                            width: '100%',
                            background: 'var(--gradient-main)',
                            borderColor: 'transparent',
                            fontSize: '1.05rem',
                            fontWeight: '600',
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                        }}
                    >
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div style={{
                    margin: '2rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500' }}>
                        OR CONTINUE WITH
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
                </div>

                {/* Social Sign Up */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                    <button
                        className="glass-button"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.85rem'
                        }}
                        onClick={(e) => e.preventDefault()}
                    >
                        <FaGoogle /> Google
                    </button>
                    <button
                        className="glass-button"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.85rem'
                        }}
                        onClick={(e) => e.preventDefault()}
                    >
                        <FaLinkedin /> LinkedIn
                    </button>
                </div>

                {/* Sign In Link */}
                <div style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>
                        Already have an account?{' '}
                    </span>
                    <Link
                        to="/signin"
                        style={{
                            color: 'var(--accent)',
                            fontWeight: '600',
                            textDecoration: 'none'
                        }}
                    >
                        Sign In
                    </Link>
                </div>

                {/* Back to Home */}
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <Link
                        to="/"
                        style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            textDecoration: 'none'
                        }}
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
