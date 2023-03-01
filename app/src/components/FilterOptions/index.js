import * as React from 'react';

function FilterOptions() {
  return (
    <div>
      <input type="radio" value="ALL">
        {/* <lable>All</lable> */}
      </input>
      <input type="radio" value="BOOKMARKED">
        {/* <lable>Bookmarked</lable> */}
      </input>
      <input type="radio" value="REGISTERED">
        {/* <lable>Registered</lable> */}
      </input>
      <input type="radio" value="SEATS AVAILABLE">
        {/* <lable>Seats Available</lable> */}
      </input>
    </div>
  );
}

export default FilterOptions;
