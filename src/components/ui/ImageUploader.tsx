import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

interface UploadImageProps
{
    value?: UploadFile[] | string;
    onChange?: ( value: UploadFile[] ) => void;
}

const UploadImage: React.FC<UploadImageProps> = ( { value, onChange } ) =>
{
    const [ fileList, setFileList ] = useState<UploadFile[]>( [] );

    useEffect( () =>
    {
        let currentFileList: UploadFile[] = [];

        if ( typeof value === 'string' && value )
        {
            currentFileList = [
                {
                    uid: '-1',
                    name: value.substring( value.lastIndexOf( '/' ) + 1 ),
                    status: 'done',
                    url: value,
                },
            ];
        } else if ( Array.isArray( value ) )
        {
            currentFileList = value;
        }

        setFileList( currentFileList );
    }, [ value ] );

    const handleChange: UploadProps[ 'onChange' ] = ( info ) =>
    {
        if ( onChange )
        {
            onChange( info.fileList );
        }
    };

    return (
        <Upload.Dragger
            name="logo"
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false}
            maxCount={1}
        >
            <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
            </p>
            <p className="ant-upload-text">Click to upload or drag and drop</p>
            <p className="ant-upload-hint">PNG, JPG, SVG up to 5MB</p>
        </Upload.Dragger>
    );
};

export default UploadImage;