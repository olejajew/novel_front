import React from 'react';
import {Modal, Form, Input} from 'antd';
import {addNovel} from '../../services/api';

const AddNovelModal = ({isVisible, handleCancel, novelAdded}) => {
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const novel = await addNovel(values)
            novelAdded(novel);
            form.resetFields();
        } catch (error){
        }
    }

    return (
        <Modal
            title="Добавить новеллу"
            open={isVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout="vertical" name="form_in_modal">
                <Form.Item
                    name="title"
                    label="Название Новеллы"
                    rules={[
                        {required: true, message: 'Введите название Новеллы!'}
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddNovelModal;