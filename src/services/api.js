export const auth = async (username, password) => {
    const response = await fetch("http://localhost:9500/api/users/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            password: password
        })
    });
    const result = await response.json();
    if (result.error) {
        throw new Error(result.error);
    }
    return result
}

export const getNovelsList = async () => {
    const userId = localStorage.getItem("token");
    const response = await fetch("http://localhost:9500/api/novels/" + userId + "/list");
    return await response.json();
}

export const addNovel = async (novel) => {
    const userId = localStorage.getItem("token");
    const response = await fetch("http://localhost:9500/api/novels/" + userId + "/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: novel.title
        })
    });
    return await response.json();
}

export const getNovel = async (novelId) => {
    const userId = localStorage.getItem("token");
    const response = await fetch("http://localhost:9500/api/novels/" + userId + "/get/" + novelId);
    return await response.json();
}