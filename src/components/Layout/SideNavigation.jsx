import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const SideNavigation = ({ navClass }) => {
  const feedElements = [
    { title: "Newsfeed", to: "/", icon: "feather-tv", color: "blue" },
    {
      title: "Badges",
      to: "/defaultbadge",
      icon: "feather-award",
      color: "red",
    },
    {
      title: "Explore Stories",
      to: "/defaultstorie",
      icon: "feather-globe",
      color: "gold",
    },
    {
      title: "Popular Groups",
      to: "/defaultgroup",
      icon: "feather-zap",
      color: "mini",
    },
    {
      title: "Author Profile",
      to: "/userpage",
      icon: "feather-user",
      color: "primary",
    },
  ];

  const pagesList = [
    {
      title: "Email Box",
      to: "/defaultemailbox",
      icon: "inbox",
      count: 584,
    },
    {
      title: "Near Hotel",
      to: "/defaulthotel",
      icon: "home",
      count: 0,
    },
    {
      title: "Latest Event",
      to: "/defaultevent",
      icon: "map-pin",
      count: 12,
    },
    {
      title: "Live Stream",
      to: "/defaultlive",
      icon: "youtube",
      count: 0,
    },
  ];

  // props = {
  //   navClass: ""
  // }

  return (
    <nav className={`navigation scroll-bar ${navClass}`}>
      <div className="container ps-0 pe-0">
        <div className="nav-content">
          <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>New </span>Feeds
            </div>
            <ul className="mb-1 top-content">
              {feedElements.map((feedElement) => (
                <li key={feedElement.to}>
                  <Link
                    to={feedElement.to}
                    className="nav-content-bttn open-font"
                  >
                    <i
                      className={`${feedElement.icon} btn-round-md bg-${feedElement.color}-gradiant me-3`}
                    />
                    <span>{feedElement.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Pages */}
          <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>More </span>Pages
            </div>
            <ul className="mb-3">
              {pagesList.map((page) => (
                <li key={page.to}>
                  <Link
                    to="/defaultemailbox"
                    className="nav-content-bttn open-font"
                  >
                    <i
                      className={`font-xl text-current feather-${page.icon} me-3`}
                    ></i>
                    <span>{page.title}</span>
                    {page.count !== 0 && (
                      <span className="circle-count bg-warning mt-1">
                        {page.count}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* More Pages */}
        </div>
      </div>
    </nav>
  );
};

SideNavigation.propTypes = {
  navClass: PropTypes.string,
};
