import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';


interface CommonButtonProps extends ButtonProps
{
    icon?: React.ReactNode;
    text: string;
}

const CommonButton: React.FC<CommonButtonProps> = ( { icon, text, ...rest } ) =>
{
    return (
        <Button icon={icon} {...rest}>
            {text}
        </Button>
    );
};

export default CommonButton;
