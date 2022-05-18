import React from 'react';
import BookingForm from './page components/BookingForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slideshow from './page components/Slideshow';
// import { addBookingDate } from '../redux/reducers/BookDate'; 
import Menu from './page components/Menu';
import pic from "../../public/images/banner.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  // onSubmit = (BookingDate) => {
  //   this.props.addBookingDate(BookingDate)
  // };
  render() {
    console.log(pic);
    return (
      <div className="db-body">
        <h1>Welcome to Nail's shop</h1>
        <section className="db-con">
          <div className="db-con-slideshow">
            <Slideshow />
          </div>
          <div className="db-con__rightcol">
            <div className="db-con__rightcol__banner">
              <img src="./images/banner.svg" style={{width:360, height:240}}/>
            </div>
            <div className="db-con__rightcol__info">
              <h2>Manicure and pedicure studios network. Quality and service number 1 in Moscow. More than 23,000 satisfied customers.
              </h2>
              <br />
              <div className="db-con__rightcol__info__button">
                <a className="button">Adress</a>
                <a className="button">Page's Facebook</a>
                <Link className="button" to='/contact'>Book a day</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="db-profit">
          <div className="db-profit__row">
            <div className="icon">
              <img src="./images/icons/icon1.png" />
              <h3>5 stages of selection <br /> Craftsmen</h3>
            </div>
            <div className="icon">
              <img src="./images/icons/icon2.png" />
              <h3>Free Parking</h3>
            </div>
            <div className="icon">
              <img src="./images/icons/icon3.png" />  
              <h3>Browser services</h3>
            </div>
          </div>
          <div className="db-profit__row">
            <div className="icon">
              <img src="./images/icons/icon4.png" />  
              <h3>4-handed service<br />No surcharges</h3>
            </div>
            <div className="icon">
              <img src="./images/icons/icon5.png" />
              <h3>More than 23,000 satisfied<br />Clients</h3>
            </div>
            <div className="icon">
              <img src="./images/icons/icon6.png" />  
              <h3>4 studios in the center<br />Houston</h3>
            </div>
          </div>
        </section>
        <section className="db-vid">
            <h1>How Nails Russia works in a 1.5 minute video:</h1><br />
            <iframe width="720" height="480" frameBorder="none"
              src="https://www.youtube.com/embed/Qj50hUcpnGM">
            </iframe>
        </section>
        <Menu />
        <section className="address">
          <div className="add-con" style={{ backgroundImage: 'url(/images/address-1.jpg)', backgroundSize:"cover" }}>
            <div className="add-con__add">
              <h2><i className="fas fa-map-marker-alt" >Address</i></h2>
              <h2><i className="fas fa-bus">Bus</i></h2>
            </div>
            <Link className="add-con__map" to="/">
              Name shop
            </Link>
            <div className="add-con__telephone">
              <h2>Telephone</h2>
            </div>
          </div>
          <div className="add-con" style={{ backgroundImage: 'url(/images/address-2.jpg)', backgroundSize:"cover" }}>
            <div className="add-con__add">
              <h2><i className="fas fa-map-marker-alt">Address</i></h2>
              <h2><i className="fas fa-bus">Bus</i></h2>
            </div>
            <Link className="add-con__map" to="/">
              Name shop
            </Link>
            <div className="add-con__telephone">
              <h2>Telephone</h2>
            </div>
          </div>
        </section> 


        {/* <BookingForm 
          onSubmit={this.onSubmit}
        /> */}
      </div>
    )
  };
};

export default Dashboard;

// const mapStateToProps = (state) => ({
//   BookingDates: () => state.BookingDate
// });

// const mapDispatchToProps = (dispatch) => ({
//   addBookingDate: (BookingDate) => dispatch(addBookingDate(BookingDate))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
