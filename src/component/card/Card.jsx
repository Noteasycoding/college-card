import React from 'react'
import card from './card.scss'

const Card = (props) => {
    return (
        <div className='card'>
            <div className="imgView">
                <img src={props.imgUrl} alt="" />
                <div className="data">
                    <div className="left">
                        <p>42</p>
                        <p>2</p>
                    </div>
                    <div className="right">

                        <div className="ratingIcon">

                            <p>image</p>
                        </div>
                        <div className="rating">
                            <p>COLLEGEDUNIA RATING</p>
                            <p>{props.collegeDuniyaRating}/10</p>
                        </div>
                    </div>
                </div>

                <div className="collegeName">
                    <div className="image">

                        <img src="https://images.collegedunia.com/public/college_data/images/logos/col27821.png?h=80&w=80&mode=stretch" alt="" />
                    </div>
                    <div className="details">
                        <p>{props.collegeName}</p>
                        <div className="address">

                            <p>KURUKSHETRA, HARYANA</p>
                            <p>ACTIVE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec2">
                <div className="fees">
                    <div className="colored">
                        <p>₹ {props.fees}</p>
                    </div>
                    <p>BE/B.Tech - FIRST YEAR FEES</p>
                </div>
                <div className="bar">

                </div>
                <div className="rating">
                    <div className="colored">
                        <p>{props.userReviewRating}/10</p>
                    </div>

                    <p>BASED ON 415 USER REVIEWS</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="sec3">
                <div className="NIRF">
                    <p>RANKED 50 OUT OF 300</p>

                    <div className="bcc">
                        <p>NIRF</p>
                    </div>

                </div>
                <div className="week">
                    <p>RANKED 50 OUT OF 300</p>
                    <div className="bcc">
                        <p>THE WEEK</p>
                    </div>
                </div>
            </div>

            <div className="sec4">
                <p>ADDMISSION 2023</p>
                <p>REVIEWS</p>
                <p>COURSES & FEES</p>
            </div>

            <div className="btn">
                <div className="apply">
                    <p>APPLY NOW</p>
                </div>
                <div className="brochure">
                    <p>BROCHURE</p>
                </div>
            </div>
        </div>
    )
}

export default Card
