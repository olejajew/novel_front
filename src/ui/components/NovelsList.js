import React, {useEffect, useState} from 'react';
import {getNovelsList} from "../../services/api";
import AddNovel from "../components/AddNovel";
import {Table} from "antd";
import {useNavigate} from "react-router-dom";

function NovelsList() {
    const [novels, setNovels] = useState([]);
    const navigate = useNavigate()

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Дата создания',
            dataIndex: 'addDate',
            key: 'add_date',
        },
    ];

    useEffect(() => {
        getNovelsList().then((data) => {
            setNovels(data);
        });
    }, []);

    const novelAdded = (newNovell) => {
        console.log("newNovell", newNovell)
        console.log("novels", novels)
        setNovels([...novels, newNovell]);
    }

    return (
        <div>
            <AddNovel
                novelAdded={novelAdded}/>
            <Table
                dataSource={novels}
                columns={columns}
                rowKey="id"
                onRow={(record) =>{
                    return {
                        onClick: () => {
                            navigate(`/novel/${record.id}`)
                        }
                    }
                }}
            />
        </div>
    );
}

export default NovelsList;