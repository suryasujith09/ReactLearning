import './index.css'

const blogData = {
  title: 'Blog Name',
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
  avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
  author: 'Author Name',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}

const BlogItemDetails = () => {
  const renderBlogItemDetails = () => {
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div className="blog-item-details-container">
        <h1 className="title">{title}</h1>
        <div className="author-details-container">
          <img className="avatar" src={avatarUrl} alt={author} />
          <span className="name">{author}</span>
        </div>
        <img className="blog-img" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  return <div className="blog-details-container">{renderBlogItemDetails()}</div>
}

export default BlogItemDetails
