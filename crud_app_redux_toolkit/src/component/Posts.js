import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts,deletePost } from '../redux/postsSlice';
import Edit from './Edit';

function Posts() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.postsArray)

    const handleClick = () => {
        dispatch(addPosts({
            id : posts.length + 1,
            title,
            description,
        }))
        setTitle("")
        setDescription("")
    }

    // delete a post
    const handleDelete = (item) => {
        dispatch(deletePost(item))
    }

    // Edit a Post
    const [isEdit, setIsEdit] = useState(false)
    const [selectedPost, setSelectedPost] = useState("")
    const handleEdit = (post) => {
        setIsEdit(true)
        setSelectedPost(post)
    }

  return (
    <div className='posts'>
        <Container className='form'>
        <InputGroup className="mb-3">
        <Form.Control
            style={{ color:'#000' }}
            placeholder='Post Title'
            value= { title }
            onChange={(e) => setTitle(e.target.value)}
        />
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control
            as="textarea"
            placeholder="Post Description"
            style={{ height: '100px', color:'#000' }}
            value = { description }
            onChange={(e) => setDescription(e.target.value)}
        />
        </InputGroup>

        <Button 
            variant="primary" 
            size="lg"
            onClick = { handleClick }
        >
            Add Post
        </Button>

        </Container>

        <div className='posts'>
            {
                posts.length > 0 ? posts.map((post,index) => 
                    <div className='post-container' key={index} >
                        <div className='post-title'>
                            <h3>{post.title}</h3>
                        </div>
                        <div className='post-description'>
                            <h5>{post.description}</h5>
                        </div>

                        <div className='btns'>
                            <Button 
                                variant="outline-info"
                                onClick={()=>handleEdit(post)}
                            >
                                Edit
                            </Button>

                            <Button 
                                variant="outline-info" 
                                onClick={() =>handleDelete(post.id)}
                            >
                                Delete
                            </Button>
                        </div>

                    </div>
                ) 
                : 
                (<h1 className='no-posts'>No Posts</h1>)
            }

            {
                isEdit 
                && 
                <Edit 
                    setIsEdit={setIsEdit}
                    title={selectedPost.title}
                    description={selectedPost.description}
                    post={selectedPost}
                />
            }

        </div>
      
    </div>
  )
}

export default Posts
