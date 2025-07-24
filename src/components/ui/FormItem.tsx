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
        <div className="mb-4">
            {label && (
                <div className="mb-2 text-sm text-gray-700">
                    {required && <span className="text-red-500 mr-1">*</span>}
                    {label}
                </div>
            )}
            {children}
            {error && (
                <div className="text-red-500 text-sm mt-2">
                    {error}
                </div>
            )}
        </div>
    );
}

export default FormItem