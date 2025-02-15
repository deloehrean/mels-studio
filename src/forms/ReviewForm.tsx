import { useState } from "react";

export default function ReviewForm() {
  const [showBusiness, setShowBusiness] = useState(true);

  // function handleSubmit(event) : void {
  function handleSubmit() {
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // console.log(formData);
  }

  const handleLandlordType = () => {
    setShowBusiness((prev) => !prev);
  };

  return (
    <form id="review_form" onSubmit={handleSubmit}>
      <div id="review">
        <input
          type="text"
          placeholder="Rating"
          aria-label="Rate Landlord 1-5 1 being lowest rating."
          name="rating"
        />
        <br />
        <textarea
          placeholder="Write a Review"
          aria-label="Write a Review"
          name="review"
        />
        <br />
      </div>
      <br />

      <div id="rent">
        <input
          type="text"
          placeholder="Initial Rent Payment"
          aria-label="How much rent did you pay when you moved in?"
          name="initial_rent"
        />
        <br />
        <input type="text" placeholder="Start Date" name="start_date" />
        <br />
        <input
          type="text"
          placeholder="Final Rent Payment"
          aria-label="How much rent did you pay on your last full month?"
          name="final_rent"
        />
        <br />
        <input
          type="text"
          placeholder="End Date"
          aria-label="When did you move out?"
          name="end_date"
        />
        <br />
      </div>
      <br />

      <div id="landlord_name">
        <div id="landlord_types">
          <label>Landlord Name</label>
          <br />
          <label>
            <input
              onClick={handleLandlordType}
              name="landlord_type"
              type="radio"
              value="business"
              defaultChecked
            />
            <span>Business</span>
          </label>
          <label>
            <input
              onClick={handleLandlordType}
              name="landlord_type"
              type="radio"
              value="person"
            />
            <span>Person</span>
          </label>
        </div>
        {showBusiness && (
          <div id="business_input">
            <input
              type="text"
              placeholder="Business Name"
              aria-label="Business Name"
              name="business_name"
            />
            <br />
          </div>
        )}
        {!showBusiness && (
          <div id="person_input">
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              name="first_name"
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              name="last_name"
            />
            <br />
          </div>
        )}
      </div>
      <br />

      <div id="address">
        <textarea placeholder="Address" aria-label="Address" name="address" />
        <br />
        <input type="text" placeholder="City" aria-label="City" name="city" />
        <br />
        <input
          type="text"
          placeholder="State"
          aria-label="State"
          name="state"
        />
        <br />
        <input
          type="text"
          placeholder="Postal Code"
          aria-label="Postal Code"
          name="postal_code"
        />
        <br />
      </div>
    </form>
  );
}
