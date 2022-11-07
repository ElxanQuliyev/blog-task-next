import React from 'react'
import { Col } from 'rsuite'
import classes from "./blog-item.module.scss";

const BlogItem = ({blog}) => {
  return (
      <Col xs={6}>
        <div className={classes.blogItem}>
           <img  src={blog.image} alt=""/>
           <h4>{blog.title}</h4>
           <ul>
                <li>{blog.tags}</li>
           </ul>
           <p>Created:{blog.created_at}</p>  
        </div>
      </Col>

  )
}

export default BlogItem