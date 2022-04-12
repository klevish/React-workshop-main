import { Post, PostContent } from './types'
import axios from 'axios'

const base_url = 'http://localhost:3004/posts'

async function getPost(postID: Post['id']): Promise<Post> {
    // get a unique post
    // [TODO] remove this return to use a fetch API
    const response = await fetch(`${base_url}/${postID}`);
    return await response.json();

    // return {
    //     id: 1,
    //     title: 'title',
    //     userId: 1,
    //     body: 'body',
    //     postImageUrl: 'https://picsum.photos/1280/960',
    // }
}

async function getPosts(): Promise<Array<Post>> {
    // get all posts
    // [TODO] remove this return to use a fetch API

    const response = await fetch(base_url);
    const dataPosts = await response.json();

    return dataPosts

    // return [
    //     {
    //         id: 1,
    //         title: 'title',
    //         userId: 1,
    //         body: 'body',
    //         postImageUrl: 'https://picsum.photos/1280/960',
    //     },
    //     {
    //         id: 2,
    //         title: 'title 2',
    //         userId: 2,
    //         body: 'body 2',
    //         postImageUrl: 'https://picsum.photos/1280/960',
    //     },
    // ]
}

async function createPost(post: PostContent): Promise<Post> {
    // create a new post
    // [TODO] remove this return to use a fetch API
    const requestPost = {
        method:'POST',
        id: 1,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            title: 'React POST Request Example', 
            userId: 1,
            bodypost: 'body',
            postImageUrl: 'https://picsum.photos/1280/960',        
        }),

    };
    const response = await fetch(base_url, requestPost)
    const dataPosts = await response.json();

    return dataPosts

    // return {
    //     id: 1,
    //     title: 'title',
    //     userId: 1,
    //     body: 'body',
    //     postImageUrl: 'https://picsum.photos/1280/960',
    // }
}

async function updatePost(post: Post): Promise<Post> {
    // update a existing post
    // [TODO] remove this return to use a fetch API
    return {
        id: 1,
        title: 'title',
        userId: 1,
        body: 'body',
        postImageUrl: 'https://picsum.photos/1280/960',
    }
}

async function deletePost(postID: Post['id']): Promise<Post['id']> {
    // delete a existing post
    // [TODO] remove this return to use a fetch API
    return 1
}

export { getPost, getPosts, deletePost, updatePost, createPost }
