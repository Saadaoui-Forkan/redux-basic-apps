import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/postsSlice';

function Edit({setIsEdit,title,description,post}) {
    
    const dispatch = useDispatch()

    const [updateTitle,setUpdateTitle] = useState(title)
    const [updateDescription,setUpdateDescription] = useState(description)


    const handleUpdate = () =>{
        dispatch(updatePost({id: post.id, title: updateTitle, description: updateDescription}))
        setIsEdit(false)
    }
  return (
    <div className='edit-post'>
      <Container className='form'>
        <InputGroup className="mb-3">
        <Form.Control
            style = {{ 
                backgroundColor: 'transparent',
                color: '#fff', 
                fontSize: '22px' 
            }}
            // value={updateTitle}
            onChange = {(e)=>setUpdateTitle(e.target.value)}
        />
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control
            as="textarea"
            // value={updateDescription}
            style = {{ 
                        height: '100px', 
                        backgroundColor: 'transparent',
                        color: '#fff', 
                        fontSize: '22px' 
                    }}
            onChange = {(e)=>setUpdateDescription(e.target.value)}
        />
        </InputGroup>

        <Button 
            size="lg"
            onClick={handleUpdate}
        >
            Update
        </Button>

        </Container>
    </div>
  )
}

export default Edit
