import React, { useState } from 'react';
import styles from './NewComment.Module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../actions/comment';
import { updatePost } from '../../actions/post';

const NewComment = ({post}) => {
    const [form, setForm] = useState({ name: '', email: '', body: ''})
    const dispatch = useDispatch()
    const id = useSelector(state => state.comments.idsAsArray.length)

    const handleInputChange = (event) => {
        const { target: { value, name } } = event;
        setForm(form => ({ ...form, [name]: value }))
    }

    const afterSubmission = (event) => {
        event.preventDefault()
        dispatch(updatePost(post.id, id + 1))
        dispatch(addComment({...form, id: id + 1}))
        setForm({
            name: '',
            email: '',
            body: ''
        })
    }

    return (
            <form onSubmit={afterSubmission} className={styles.container}>
                <input 
                    className={styles.input}
                    type={'email'}
                    name={'email'} 
                    placeholder={'Email'}
                    required={true}
                    onChange={handleInputChange}
                    value={form.email}
                />
                <input 
                    className={styles.input}
                    type={'text'}
                    name={'name'} 
                    placeholder={'Name'}
                    required={true}
                    onChange={handleInputChange}
                    value={form.name}
                />
                <input 
                    className={styles.input}
                    type={'text'}
                    name={'body'} 
                    placeholder={'Add comment'}
                    required={true}
                    onChange={handleInputChange}
                    value={form.body}
                />
                <input
                    className={styles.button} 
                    type={'submit'}
                    value={'Comment'}
                />
            </form>
    )
}

export default NewComment