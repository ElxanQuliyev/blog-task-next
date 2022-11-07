import React from 'react'
import BlogItem from '../blog-item/BlogItem'
import classes from './blog-list.module.scss';
const BlogList = ({blogs}) => {
  return (
    <div className={classes.blogList}>
        {blogs.map(blog=><BlogItem blog={blog}/>)}
    </div>
  )
}

export default BlogList