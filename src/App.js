import React, { useState } from 'react';
import Card from './component/card/Card.jsx';

const App = () => {
  const [sortedBy, setSortedBy] = useState(null); // State to keep track of sorting criteria
  const [ascending, setAscending] = useState(true); // State to toggle ascending/descending order
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const collegeDetails = [
    {
      id: 1,
      collegeName: "NATIONAL INSTITUTE OF TECHNOLOGY -[NIT], KURUKSHETRA",
      imgUrl: "https://images.collegedunia.com/public/college_data/images/campusimage/1435406111DSC_6913.JPG",
      collegeLogo: "https://images.collegedunia.com/public/college_data/images/logos/col27821.png?h=80&w=80&mode=stretch",
      collegeDuniyaRating: 7.5,
      userReviewRating: 8.3,
      address: " Kurukshetra, Haryana",
      fees: 56716,
    },
    {
      id: 2,
      collegeName: "National Institute Of Technology - [NIT], New Delhi",
      imgUrl: "https://images.collegedunia.com/public/college_data/images/campusimage/14410828821f.jpg",
      collegeLogo: "https://images.collegedunia.com/public/college_data/images/logos/1509002389logo.png?h=80&w=80&mode=stretch",
      collegeDuniyaRating: 8.0,
      userReviewRating: 9.1,
      address: "New Delhi, Delhi NCR",
      fees: 65432,
    },
    {
      id: 3,
      collegeName: "National Institute Of Technology - [NIT], Srinagar",
      imgUrl: "https://images.collegedunia.com/public/college_data/images/campusimage/1412671813nit4.JPG",
      collegeLogo: "https://images.collegedunia.com/public/college_data/images/logos/1410851535nit%20logo.jpg?h=80&w=80&mode=stretch",
      collegeDuniyaRating: 9.2,
      userReviewRating: 8.8,
      address: "Srinagar, Jammu And Kashmir",
      fees: 98765,
    },
  ]


  // Function to handle sorting
  const handleSort = (criteria) => {
    if (sortedBy === criteria) {
      // Toggle between ascending and descending if same criteria is clicked again
      setAscending(!ascending);
    } else {
      // Set new sorting criteria and default to ascending order
      setSortedBy(criteria);
      setAscending(true);
    }
  };

  // Function to handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter and sort the collegeDetails array based on search and sorting criteria
  const filteredAndSortedCollegeDetails = collegeDetails
    .filter(item => item.collegeName.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const aValue = a[sortedBy];
      const bValue = b[sortedBy];
      if (ascending) {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by College Name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={() => handleSort('collegeDuniyaRating')}>
          Sort by CollegeDuniya Rating
        </button>
        <button onClick={() => handleSort('fees')}>Sort by Fees</button>
        <button onClick={() => handleSort('userReviewRating')}>
          Sort by User Review Rating
        </button>
      </div>
      {filteredAndSortedCollegeDetails.map((item, index) => (
        <Card
          key={item.id}
          collegeName={item.collegeName}
          imgUrl={item.imgUrl}
          collegeLogo={item.collegeLogo}
          collegeDuniyaRating={item.collegeDuniyaRating}
          userReviewRating={item.userReviewRating}
          address={item.address}
          fees={item.fees}

        />
      ))}
    </div>
  );
};

export default App;


