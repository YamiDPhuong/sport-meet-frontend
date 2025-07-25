import React from 'react';
import { Modal } from 'antd';
import TeamForm from './TeamForm';
import type { Team } from '@/types/types';

interface CreateTeamModalProps
{
    visible: boolean;
    onClose: () => void;
    onFinish: ( values: Team ) => void;
    loading?: boolean;
}


const CreateTeamModal: React.FC<CreateTeamModalProps> = ( {
    visible,
    onClose,
    onFinish,
    loading = false,
} ) =>
{
    const handleFormFinish = ( values: Team ) =>
    {
        onFinish( values );
    };

    const handleCancel = () =>
    {
        onClose();
    };

    return (
        <Modal
            title="Create Team"
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
                onFinish={handleFormFinish}
                onCancel={handleCancel}
                submitButtonText="Create"
                loading={loading}
            />
        </Modal>
    );
};

export default CreateTeamModal;