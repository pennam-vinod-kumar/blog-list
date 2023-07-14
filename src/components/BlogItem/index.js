// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default BlogItem
