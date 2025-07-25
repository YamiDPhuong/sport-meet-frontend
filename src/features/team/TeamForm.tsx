import React, { useState, useEffect } from 'react';
import { Input, Select, Button } from 'antd';
import Form, { Field } from 'rc-field-form';
import MemberSelect from './MemberSelect';
import FormItem from '../../components/ui/FormItem';
import UploadImage from '../../components/ui/ImageUploader';
import type { Team } from '../../types/types';
import type { UploadFile } from 'antd';
import { allMembers } from '../../fake/staticFakeData';

interface TeamFormProps
{
    initialValues?: Partial<Team>;
    onFinish: ( values: Team ) => void;
    onCancel: () => void;
    submitButtonText?: string;
    loading?: boolean;
}

const sports = [
    { value: 'football', label: 'Football' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'tennis', label: 'Tennis' },
    { value: 'volleyball', label: 'Volleyball' },
    { value: 'badminton', label: 'Badminton' },
];
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
        Array.isArray( initialValues.members ) ? initialValues.members.map( member => member.id ) : []
    );
    const [ errors, setErrors ] = useState<Record<string, string>>( {} );
    const isEditMode = !!initialValues.id;

    useEffect( () =>
    {
        if ( initialValues )
        {
            form.setFieldsValue( initialValues );
            if ( initialValues.members )
            {
                setSelectedMembers( isEditMode ? initialValues.members.map( member => member.id ) : initialValues.members.map( member => member.id ) );
            }
        }
    }, [ initialValues, form ] );

    const normFile = ( e: UploadFile[] | { fileList: UploadFile[] } ) => Array.isArray( e ) ? e : e?.fileList;

    const validateForm = ( values: Partial<Team> ) =>
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
                        members: allMembers.filter( member => selectedMembers.includes( member.id ) ),
                    } );
                }
            } )
            .catch( () => { } );
    };


    return (
        <Form form={form} onFinish={handleSubmit} className="flex flex-col h-full">
            <div className="flex-1">
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
                    members={allMembers}
                    value={selectedMembers}
                    onChange={setSelectedMembers}
                    label="Add Members"
                    placeholder="Search members..."
                />
            </div>

            <div className='flex justify-end gap-4 pt-4 mt-4 border-t border-gray-200'>
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
