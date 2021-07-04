export const getCommentsApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    return data;
}