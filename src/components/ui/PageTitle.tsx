import React from 'react';

interface PageTitleProps
{
    title: string;
    subtitle: string;
    style?: React.CSSProperties;
}

const PageTitle: React.FC<PageTitleProps> = ( { title, subtitle, style } ) =>
{
    return (
        <div>
            <h1 className="text-2xl font-extralight" style={style}>{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
        </div>
    );
};

export default PageTitle;