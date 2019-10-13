import React from 'react';
import PropTypes from 'prop-types';
import style from './Gallery.module.css';
import PhotoCard from './PhotoCard/PhotoCard';

const Gallery = ({
  photos,
  checkedImg,
  showMorePhotos,
  isOpenModal,
  openModal,
  closeModal,
}) => (
  <>
    <ul className={style.gallery}>
      {photos.map(el => (
        <PhotoCard
          key={el.id}
          url={el.webformatURL}
          likes={el.likes}
          views={el.views}
          comments={el.comments}
          downloads={el.downloads}
          id={el.id}
          isOpenModal={isOpenModal}
          openModal={openModal}
          closeModal={closeModal}
          checkedImg={checkedImg}
        />
      ))}
    </ul>
    <button className={style.button} type="button" onClick={showMorePhotos}>
      Load more
    </button>
  </>
);

Gallery.defaultProps = {
  checkedImg: {},
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  checkedImg: PropTypes.shape({
    largeImageURL: PropTypes.string,
  }),
  showMorePhotos: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Gallery;
