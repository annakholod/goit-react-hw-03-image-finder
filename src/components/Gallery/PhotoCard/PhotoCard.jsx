import React from 'react';
import PropTypes from 'prop-types';
import style from './PhotoCard.module.css';
import Modal from './Modal/Modal';

const PhotoCard = ({
  id,
  url,
  likes,
  views,
  comments,
  downloads,
  isOpenModal,
  openModal,
  closeModal,
  checkedImg,
}) => (
  <li className={style.photoCard}>
    <img className={style.photoCardImg} src={url} alt="" />

    <div className={style.stats}>
      <p className={style.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button
      type="button"
      className={style.fullscreenButton}
      onClick={() => openModal(id)}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
    {isOpenModal && (
      <Modal closeModal={closeModal}>
        <img className={style.modalImg} src={checkedImg.largeImageURL} alt="" />
      </Modal>
    )}
  </li>
);

PhotoCard.defaultProps = {
  checkedImg: {},
};

PhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  checkedImg: PropTypes.shape({
    largeImageURL: PropTypes.string,
  }),
};

export default PhotoCard;
