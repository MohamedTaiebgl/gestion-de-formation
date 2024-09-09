
import PropTypes from 'prop-types';

function Article({ title, photo, content, author, date }) {
  return (
    <div className="article" >
      {photo && <img src={photo} alt={title} className="article-photo" />}
      <h2 className="article-title">{title}</h2>
      <p className="article-content">{content}</p><hr/>
      <div className="article-meta">
        <span className="article-author">{author}</span><hr/>
        <span className="article-date">{date}</span>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}; 

export default Article;
