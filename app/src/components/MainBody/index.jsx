import * as React from 'react';
import './mainBodyStyles.css';
import filter from '../../Assets/icons/filter-solid.svg';
import searchIcon from '../../Assets/icons/magnifying-glass-solid.svg';
import FilterOptions from '../FilterOptions/index';
import CardContainer from '../CardContainer/index';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainBody() {
  const [filterState, setFilterState] = React.useState(false);

  const handleFilter = () => {
    setFilterState(!filterState);
  };

  return (
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
      <CardContainer />
    </div>
  );
}

export default MainBody;
