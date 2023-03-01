import * as React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FilterOptions from '../../components/FilterOptions';
import filter from '../../Assets/icons/filter-solid.svg';
import './singleCard.css';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/commons/date';
import searchIcon from '../../Assets/icons/magnifying-glass-solid.svg';
import { useParams } from 'react-router-dom';

function singleCardView() {
  let { id } = useParams();
  //   console.log(id);
  const [filterState, setFilterState] = React.useState(false);
  const [cardData, setCardData] = React.useState({});

  async function getSingleCardData() {
    const response = await axios.get(`http://localhost:8080/api/events/${id}`);
    setCardData(response.data);
  }
  React.useEffect(() => {
    getSingleCardData();
  }, []);

  const handleFilter = () => {
    setFilterState(!filterState);
  };

  const [Registered, setRegistered] = React.useState(cardData.isRegistered);
  const [Bookmarked, setBookmarked] = React.useState(cardData.isBookmarked);

  const handleRegister = async id => {
    await axios.patch(`http://localhost:8080/api/events/${id}`, {
      isRegistered: !Registered,
    });
    setRegistered(!Registered);
  };
  //console.log(Registered);
  const handleBookmark = async id => {
    //db call to update the isBookmarked value
    await axios.patch(`http://localhost:8080/api/events/${id}`, {
      isBookmarked: !Bookmarked,
    });
    setBookmarked(!Bookmarked);
  };

  return (
    <div className="singleCardView">
      <Header />
      <div className="main-body">
        <div className="searchAndFilter">
          <div className="filterDropDown">
            <img
              src={filter}
              alt="filter icon"
              id="filter-icon"
              onClick={handleFilter}
            ></img>
            <p onClick={handleFilter}>FILTER</p>
            <FontAwesomeIcon
              icon={filterState ? faChevronUp : faChevronDown}
              onClick={() => {
                handleFilter();
              }}
            />
          </div>
          <div className="searchButton">
            <input type="text" id="searchBar" placeholder="Event Name" />
            <img src={searchIcon} alt="search icon" id="searchIcon"></img>
          </div>
        </div>
        {filterState ? <FilterOptions /> : null}

        <div className="singleEventCard" id={id}>
          <img className="eventImage" src={cardData.imgUrl} alt="eventImage" />
          <div className="eventDetails">
            <p id="SingleEventTitle">{cardData.name}</p>
            <span id="cardEventFont">
              <p id="SingleEventDescription">{cardData.description}</p>
              <p id="eventLocation">
                <b>VENUE:</b>
                {cardData.venue}
              </p>
              <p id="eventDate">
                {' '}
                <b> Date: </b> {getFormattedDateFromUtcDate(cardData.datetime)}
              </p>

              <div className="actions">
                <div className="registration">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={Registered ? 'Registered' : 'NotRegistered'}
                    onClick={() => {
                      handleRegister(id);
                    }}
                  />
                  <p id="registertag">
                    {Registered ? 'Registered' : 'Register Now'}
                  </p>
                </div>
                <FontAwesomeIcon
                  id="bookmark"
                  icon={faBookmark}
                  className={Bookmarked ? 'BookMarked' : 'NotBookMarked'}
                  onClick={() => handleBookmark(id)}
                />
              </div>
              <button
                className="UnRegisterbtn"
                onClick={() => handleRegister(id)}
              >
                {Registered ? 'Registered' : 'Register'}
              </button>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default singleCardView;
