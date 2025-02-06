import PropTypes from "prop-types";

export const Postview = ({ user, time, avatar, postimage, des }) => {
  return (
    <div className="card shadow-xss rounded-xxl border-0 p-4 mb-3">
      <div className="card-body flex items-center p-0">
        <figure className="avatar me-3">
          <img
            src={avatar}
            alt="avater"
            className="shadow-sm rounded-circle w45"
          />
        </figure>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          {user}
          <span className="block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            {time}
          </span>
        </h4>
        <div className="ms-auto pointer">
          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
        </div>
      </div>
      <div className="card-body px-3 mt-3" onClick={() => {}}>
        <p
          className={`fw-500 text-grey-500 font-xssss mb-2 leading-6 relative`}
        >
          {des}
        </p>
      </div>

      {/* POST IMAGE */}
      {postimage && (
        <div className="card-body block p-0 mb-3">
          <div className="row ps-2 pe-2">
            <div className="col-sm-12 p-1">
              <img src={postimage} className="rounded-3" alt="post" />
            </div>
          </div>
        </div>
      )}
      <div className="card-body flex items-center items-center p-0">
        <div className="emoji-bttn pointer flex items-center align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2">
          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>{" "}
          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
          2.8K Like
        </div>
        <a className="flex items-center align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
          <span className="d-none-xss">22 Comment</span>
        </a>
        <div
          className={`pointer ms-auto flex items-center align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss cursor-pointer`}
          // id={`dropdownMenu${id}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          // onClick={toggleShareOpen}
        >
          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
          <span className="d-none-xs">Share</span>
        </div>
      </div>
    </div>
  );
};

Postview.propTypes = {
  user: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string,
  postimage: PropTypes.string,
  des: PropTypes.string,
};
