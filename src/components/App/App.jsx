import React, { Component, createRef } from 'react';
import style from './App.module.css';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import fetchPhotos from '../../services/api';

class App extends Component {
  state = {
    photos: [],
    inputValue: '',
    isLoading: false,
    isError: false,
    count: 2,
    isOpenModal: false,
    checkedImgId: null,
  };

  listRef = createRef();

  componentDidMount() {
    this.getPhotos();
  }

  handleChange = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  handleSubmit = evt => {
    const { inputValue } = this.state;

    evt.preventDefault();
    this.getPhotos(inputValue);
  };

  getPhotos = query => {
    this.setState({ isLoading: true });

    fetchPhotos(query)
      .then(res => this.setState({ photos: res.data.hits }))
      .catch(() => this.setState({ isError: true }))
      .finally(() => this.setState({ isLoading: false }));
  };

  nextFetchPhotos = (query, pageNumber) => {
    this.setState({ isLoading: true });

    fetchPhotos(query, pageNumber)
      .then(res =>
        this.setState(
          prevState => ({
            photos: [...prevState.photos, ...res.data.hits],
          }),
          this.scrollPage,
        ),
      )
      .catch(() => this.setState({ isError: true }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollPage = () => {
    const { scrollHeight } = this.listRef.current;

    window.scrollTo({
      top: scrollHeight - 1160,
      behavior: 'smooth',
    });
  };

  countClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  showMorePhotos = query => {
    const { count } = this.state;

    this.nextFetchPhotos(query, count);
    this.countClick();
  };

  openModal = id => {
    this.setState({ isOpenModal: true, checkedImgId: id });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const {
      inputValue,
      photos,
      isLoading,
      isError,
      isOpenModal,
      checkedImgId,
    } = this.state;
    const checkedImg = photos.find(el => el.id === checkedImgId);

    return (
      <div className={style.app} ref={this.listRef}>
        <SearchForm
          inputValue={inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {isLoading && <Loader />}
        {isError && <Error />}
        {photos.length > 0 && (
          <Gallery
            photos={photos}
            checkedImg={checkedImg}
            showMorePhotos={() => this.showMorePhotos(inputValue)}
            isOpenModal={isOpenModal}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
