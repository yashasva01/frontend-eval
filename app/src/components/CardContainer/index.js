import * as React from 'react';
import makeRequest from '../../utils/makeRequest/index';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import Card from '../Card/index';
import './cardContainer.css';

function CardContainer() {
  const [allCardData, setAllCardData] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS).then(response => {
      setAllCardData(response);
    });
  }, []);
  //   console.log(allCardData);
  return (
    <div className="cardContainer">
      {allCardData.map(cardData => {
        return <Card key={cardData.id} cardData={cardData} id={cardData.id} />;
      })}
    </div>
  );
}

export default CardContainer;
