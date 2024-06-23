import React, {useState} from "react";
import {Button} from "antd";
import AddNovelModal from "./AddNovelModal";

const AddNovel = ({novelAdded}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const mNovelAdded = (novel) => {
        setIsModalVisible(false);
        novelAdded(novel)
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>Add novel</Button>
            <AddNovelModal
                isVisible={isModalVisible}
                handleCancel={handleCancel}
                novelAdded={mNovelAdded}
            />
        </div>
    )
}

export default AddNovel;