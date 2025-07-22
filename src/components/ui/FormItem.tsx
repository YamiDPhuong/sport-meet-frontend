import React from 'react'

interface FormItemProps
{
    label?: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}

const FormItem: React.FC<FormItemProps> = ( { label, required, error, children } ) =>
{
    return (
        <div style={{ marginBottom: 24 }}>
            {label && (
                <div style={{
                    marginBottom: 8,
                    color: 'rgba(0, 0, 0, 0.85)',
                    fontSize: 14,
                    lineHeight: '22px'
                }}>
                    {required && <span style={{ color: '#ff4d4f', marginRight: 4 }}>*</span>}
                    {label}
                </div>
            )}
            {children}
            {error && (
                <div style={{
                    color: '#ff4d4f',
                    fontSize: 14,
                    lineHeight: '22px',
                    marginTop: 8
                }}>
                    {error}
                </div>
            )}
        </div>
    );
}

export default FormItem