import React, { useState, useEffect } from 'react';
import { Input, Select, Button } from 'antd';
import Form, { Field } from 'rc-field-form';
import MemberSelect from './MemberSelect';
import FormItem from '../../components/ui/FormItem';
import UploadImage from '../../components/ui/ImageUploader';

interface TeamFormProps
{
    initialValues?: any;
    onFinish: ( values: any ) => void;
    onCancel: () => void;
    submitButtonText?: string;
    loading?: boolean;
}
const members = [
    {
        id: '1',
        name: 'John Smith',
        email: 'john.smith@email.com',
        avatar: 'https://i.pravatar.cc/150?u=johnsmith',
    },
    {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '3',
        name: 'Mike Davis',
        email: 'mike.davis@email.com',
        avatar: 'https://i.pravatar.cc/150?u=mikedavis',
    },
    {
        id: '4',
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        avatar: 'https://i.pravatar.cc/150?u=emilydavis',
    },
    {
        id: '5',
        name: 'David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '6',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '7',
        name: 'David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '8',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '9',
        name: 'David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '10',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '11',
        name: 'David Wilson David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '12',
        name: 'Sarah Johnson Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '13',
        name: 'David Wilson David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '14',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '15',
        name: 'David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '16',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '17',
        name: 'David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '18',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
    {
        id: '19',
        name: 'David Wilson',
        email: 'david.w@email.com',
        avatar: 'https://i.pravatar.cc/150?u=davidw',
    },
    {
        id: '20',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        avatar: 'https://i.pravatar.cc/150?u=sarahj',
    },
];
const sports = [
    { value: 'football', label: 'Football' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'tennis', label: 'Tennis' },
    { value: 'volleyball', label: 'Volleyball' },
    { value: 'badminton', label: 'Badminton' },
];
const selectedMembersTeam = [ '1', '2', '3', '4', '5' ];

const TeamForm: React.FC<TeamFormProps> = ( {
    initialValues = {},
    onFinish: onFinishProp,
    onCancel,
    submitButtonText = 'Create',
    loading = false,
} ) =>
{
    const [ form ] = Form.useForm();
    const [ selectedMembers, setSelectedMembers ] = useState<string[]>(
        Array.isArray( initialValues.members ) ? initialValues.members : []
    );
    const [ errors, setErrors ] = useState<Record<string, string>>( {} );
    const isEditMode = !!initialValues.key;

    useEffect( () =>
    {
        if ( initialValues )
        {
            form.setFieldsValue( initialValues );
            if ( initialValues.members )
            {
                setSelectedMembers( isEditMode ? initialValues.members : selectedMembersTeam );
            }
        }
    }, [ initialValues, form ] );

    const normFile = ( e: any ) =>
    {
        if ( Array.isArray( e ) )
        {
            return e;
        }
        return e && e.fileList;
    };

    const validateForm = ( values: any ) =>
    {
        const newErrors: Record<string, string> = {};

        if ( !values.teamName || values.teamName.trim() === '' )
        {
            newErrors.teamName = 'Please enter team name!';
        }

        if ( !values.sport )
        {
            newErrors.sport = 'Please select a sport!';
        }

        setErrors( newErrors );
        return Object.keys( newErrors ).length === 0;
    };

    const handleSubmit = () =>
    {
        form
            .validateFields()
            .then( ( values ) =>
            {
                if ( validateForm( values ) )
                {
                    onFinishProp( {
                        ...values,
                        members: selectedMembers,
                    } );
                }
            } )
            .catch( () => { } );
    };


    return (
        <Form form={form} onFinish={handleSubmit}>
            <Field name="teamName" rules={[ { required: true, message: 'Please enter team name' } ]}>
                {( control, meta ) => (
                    <FormItem
                        label="Team Name"
                        error={meta.errors?.[ 0 ] || errors.teamName}
                    >
                        <Input
                            {...control}
                            placeholder="Enter team name"
                            status={meta.errors?.length > 0 || errors.teamName ? 'error' : undefined}
                        />
                    </FormItem>
                )}
            </Field>

            <FormItem label="Team Logo">
                <Field name="logo" getValueFromEvent={normFile}>
                    {( control ) => <UploadImage {...control} />}
                </Field>
            </FormItem>

            <div className='grid grid-cols-2'>
                <Field name="sport" rules={[ { required: true, message: 'Please select a sport' } ]}>
                    {( control, meta ) => (
                        <FormItem
                            label="Sport"
                            error={meta.errors?.[ 0 ] || errors.sport}
                        >
                            <Select
                                {...control}
                                placeholder="Select sport"
                                options={sports}
                                status={meta.errors?.length > 0 || errors.sport ? 'error' : undefined}
                            />
                        </FormItem>
                    )}
                </Field>
                <Field name="type" rules={[ { required: true, message: 'Please select a type' } ]}>
                    {( control, meta ) => (
                        <FormItem
                            label="Type"
                            error={meta.errors?.[ 0 ] || errors.type}
                        >
                            <Select
                                {...control}
                                placeholder="Select type"
                                options={[
                                    { value: 'professional', label: 'Professional' },
                                    { value: 'youth', label: 'Youth' },
                                    { value: 'amateur', label: 'Amateur' },
                                ]}
                                status={meta.errors?.length > 0 || errors.type ? 'error' : undefined}
                            />
                        </FormItem>
                    )}
                </Field>
            </div>

            <MemberSelect
                members={members}
                value={selectedMembers}
                onChange={setSelectedMembers}
                label="Add Members"
                placeholder="Search members..."
            />

            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                <Button onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="primary" onClick={handleSubmit} loading={loading} disabled={loading}>
                    {submitButtonText}
                </Button>
            </div>
        </Form>
    );
};

export default TeamForm;
