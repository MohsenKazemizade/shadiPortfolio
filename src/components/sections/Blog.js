import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/post-1.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Leadership</span>
                <span className="title">
                  Two Assignments, One Long Day at the Assessment Center
                </span>
                <p>
                  I recently took part in a full-day assessment center that
                  started at seven in the...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>10 Sep 2024</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/post-2.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Product</span>
                <span className="title">
                  Understanding the Developer’s Language: Key Technical Terms
                  Every Product Owner Should Know
                </span>
                <p>As a Product Owner, you...</p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>3 April 2025</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        {/* <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-3.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">essentials</span>
                <span className="title">
                  Change Management for Customer Success
                </span>
                <p>
                  ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                  veniam...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div> */}
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
