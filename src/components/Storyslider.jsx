import Slider from "react-slick";

const storyList = [
  {
    bgUrl: "https://picsum.photos/id/14/125/200",
    imageUrl: "user.png",
    name: "Aliqa",
    email: "support@gmail.com",
  },
  {
    bgUrl: "https://picsum.photos/id/19/125/200",
    imageUrl: "user.png",
    name: "Seary Victor ",
    email: "support@gmail.com",
  },
  {
    bgUrl: "https://picsum.photos/id/18/125/200",
    imageUrl: "avatar.jpg",
    name: "John Steere ",
    email: "support@gmail.com",
  },
  {
    bgUrl: "https://picsum.photos/id/22/125/200",
    imageUrl: "user.png",
    name: "Mohannad ",
    email: "support@gmail.com",
  },
  {
    bgUrl: "https://picsum.photos/id/32/125/200",
    imageUrl: "user.png",
    name: "Studio ",
    email: "support@gmail.com",
  },
  {
    bgUrl: "https://picsum.photos/id/11/125/200",
    imageUrl: "user.png",
    name: "Hendrix ",
    email: "support@gmail.com",
  },
  {
    bgUrl: "https://picsum.photos/id/23/125/200",
    imageUrl: "user.png",
    name: "Zitoun ",
    email: "support@gmail.com",
  },
];

export const Storyslider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      <div className="card w125 h200 block border-0 shadow-none rounded-xxl bg-dark overflow-hidden mb-1 mt-0 me-3 relative">
        <div className="card-body block p-3 absolute bottom-0 text-center left-5">
          <span className="btn-round-lg bg-white">
            <i className="feather-plus font-lg" />
          </span>
          <div className="clearfix mt-1"></div>
          <h4 className="fw-700 relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
            Add story
          </h4>
        </div>
      </div>
      {storyList.map((story) => (
        <div key={story.bgUrl}>
          <div
            className="card w125 h200 block border-0 shadow-none rounded-xxl bg-dark overflow-hidden mb-1 mt-0 me-3 relative"
            style={{ backgroundImage: `url("${story.bgUrl}")` }}
          >
            <div className="card-body block p-3 absolute bottom-0 text-center left-5">
              <figure className="overflow-hidden avatar ms-auto me-auto mb-0 relative w50 z-index-1">
                <img
                  src={`assets/images/${story.imageUrl}`}
                  className="float-right p0 bg-white rounded-xl shadow-xss"
                />
              </figure>
              <h4 className="fw-600 relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                {story.name}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
