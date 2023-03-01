import * as React from 'react';
import axios from 'axios';
import './cardStyles.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/commons/date';
// import { PATCH_EVENT_BOOKMARK_REGISTRATION } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

function Card({ cardData, id }) {
  const navigate = useNavigate();
  //   {
  //     "id": 1,
  //     "name": "Battle of the Bands",
  //     "description": "Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won't want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don't miss out on the most unforgettable rock competition of the year!",
  //     "venue": "All Stars Arena, Las Vegas, NV, USA",
  //     "datetime": "2023-03-01T05:00:00.000Z",
  //     "timezone": "America/Los_Angeles",
  //     "areSeatsAvailable": true,
  //     "isRegistered": false,
  //     "isBookmarked": false,
  //     "imgUrl": "https://i.ibb.co/3zbdvWX/battle-of-bands.jpg"
  // }
  const [Registered, setRegistered] = React.useState(cardData.isRegistered);
  const [Bookmarked, setBookmarked] = React.useState(cardData.isBookmarked);
  const handleRegister = async id => {
    // console.log(id);
    await axios.patch(`http://localhost:8080/api/events/${id}`, {
      isRegistered: !Registered,
    });
    setRegistered(!Registered);
  };
  const handleBookmark = async id => {
    //db call to update the isBookmarked value
    await axios.patch(`http://localhost:8080/api/events/${id}`, {
      isBookmarked: !Bookmarked,
    });
    setBookmarked(!Bookmarked);
  };

  return (
    <div className="eventCard" id={id}>
      <img
        className="eventImage"
        src={cardData.imgUrl}
        alt="eventImage"
        onClick={() => navigate(`/${id}`)}
      />
      <div className="eventDetails">
        <p id="eventTitle" onClick={() => navigate(`/${id}`)}>
          {cardData.name}
        </p>
        <span id="cardEventFont">
          <p id="eventDescription" onClick={() => navigate(`/${id}`)}>
            {cardData.description}
          </p>
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
        </span>
      </div>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.number,
};
Card.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    venue: PropTypes.string,
    datetime: PropTypes.string,
    timezone: PropTypes.string,
    areSeatsAvailable: PropTypes.bool,
    isRegistered: PropTypes.bool,
    isBookmarked: PropTypes.bool,
    imgUrl: PropTypes.string,
  }),
};
export default Card;
