import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getNovel} from "../../services/api";

const Novel = () => {
    const {id} = useParams();
    const [novel, setNovel] = useState({});

    useEffect(() => {
        getNovel(id).then((data) => {
            setNovel(data);
        });
    }, [id]);

    return (
        <div>
            <h1>{novel.title}</h1>
        </div>
    );
}

export default Novel;