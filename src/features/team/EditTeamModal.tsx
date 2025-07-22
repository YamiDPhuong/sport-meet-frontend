import React from 'react';
import { Modal } from 'antd';
import TeamForm from './TeamForm';

interface EditTeamModalProps
{
    visible: boolean;
    onClose: () => void;
    onFinish: ( values: any ) => void;
    initialValues?: any;
    loading?: boolean;
}

const EditTeamModal: React.FC<EditTeamModalProps> = ( {
    visible,
    onClose,
    onFinish,
    initialValues = {},
    loading = false,
} ) =>
{
    const handleFormFinish = ( values: any ) =>
    {
        onFinish( values );
    };

    const handleCancel = () =>
    {
        onClose();
    };

    return (
        <Modal
            title="Edit Team"
            open={visible}
            onCancel={handleCancel}
            footer={null}
            style={{ top: 20 }}
            styles={{
                body: { height: 550, overflow: 'auto', scrollbarWidth: 'none' },
            }}
            width="33%"
        >
            <TeamForm
                initialValues={initialValues}
                onFinish={handleFormFinish}
                onCancel={handleCancel}
                submitButtonText="Update"
                loading={loading}
            />
        </Modal>
    );
};

export default EditTeamModal;
