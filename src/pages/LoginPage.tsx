import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <div className="auth-page-wrapper" style={{
            paddingTop: '120px',
            paddingBottom: '80px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f9fa'
        }}>
            <div className="auth-card" style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                width: '100%',
                maxWidth: '450px'
            }}>
                <div className="auth-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '10px' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--light-text)' }}>Login to access your account</p>
                </div>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <label style={{ fontWeight: '500', color: '#333' }}>Password</label>
                            <a href="#" style={{ fontSize: '14px', color: 'var(--primary-color)' }}>Forgot?</a>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '16px',
                        fontWeight: '600',
                        background: 'var(--primary-color)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}>
                        Login
                    </button>
                </form>

                <div className="auth-divider" style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                    color: '#999',
                    fontSize: '14px'
                }}>
                    <span style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></span>
                    <span style={{ padding: '0 10px' }}>OR</span>
                    <span style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></span>
                </div>

                <button className="btn-google" style={{
                    width: '100%',
                    padding: '12px',
                    background: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: '#333',
                    marginBottom: '25px'
                }}>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
                    Continue with Google
                </button>

                <div className="auth-footer" style={{ textAlign: 'center', fontSize: '15px', color: '#666' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
