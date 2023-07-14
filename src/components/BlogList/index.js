import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogList} = props
  return (
    <div>
      <ul>
        {blogList.map(each => (
          <BlogItem blogDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
