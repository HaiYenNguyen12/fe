import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
  return (
    
  <div className="row">
    <section class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                    <div class="booking-form">
                        <form action="#" style={{ display: "flex", gap: 40 }}>
                            <div class="check-date">
                                <label for="date-in">Check In:</label>
                                <input type="date" class="date-input" id="date-in" />
                                <i class="icon_calendar"></i>
                            </div>
                            <div class="check-date">
                                <label for="date-out">Check Out:</label>
                                <input type="date" class="date-input" id="date-out" />
                                <i class="icon_calendar"></i>
                            </div>
                            <div class="select-option">
                                <label for="city">City</label>
                                <select id="city">
                                    <option value="">Da Nang</option>
                                    <option value="">Ha Noi</option>
                                </select>
                            </div>
                            <div class="select-option">
                                <label for="room">Room Type</label>
                                <select id="room">
                                    <option value="">Single</option>
                                    <option value="">Double</option>
                                    <option value="">Triple</option>
                                </select>
                            </div>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-slider owl-carousel">
            <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg"></div>
            <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg"></div>
            <div class="hs-item set-bg" data-setbg="img/hero/hero-3.jpg"></div>
        </div>
    </section>
    </div>
  );
}

export default SearchBar;