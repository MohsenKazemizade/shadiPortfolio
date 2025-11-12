const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Steven
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Walker
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>27 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>German</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Langages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>London</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>21 184 010</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>contact@steven.net</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Skype :</span>
                    <span>steven.walker</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <img
                  src="/assets/logos/Product-Ownership-Icon.png"
                  alt="Product Ownership"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-wordpress-plain" /> */}
              </span>
              <h4>Product Ownership</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <img
                  src="/assets/logos/Creative-Project-Management.png"
                  alt="Project Management"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-jquery-plain" /> */}
              </span>
              <h4>Project Management</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <img
                  src="/assets/logos/UX-Strategy.png"
                  alt="UX Strategy"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-angularjs-plain" /> */}
              </span>
              <h4>UX Strategy</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <img
                  src="/assets/logos/Design-Thinking.png"
                  alt="Design Thinking"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-drupal-plain" /> */}
              </span>
              <h4>Design Thinking</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <img
                  src="/assets/logos/Data-Analytics.png"
                  alt="Data Analytics"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-react-plain" /> */}
              </span>
              <h4>Data Analytics</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <img
                  src="/assets/logos/Agile-Scrum.png"
                  alt="Agile Scrum"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-docker-plain" /> */}
              </span>
              <h4>Agile & Scrum</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <img
                  src="/assets/logos/HTML-CSS.png"
                  alt="HTML CSS"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-nodejs-plain" /> */}
              </span>
              <h4>HTML & CSS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <img
                  src="/assets/logos/Figma.png"
                  alt="Figma"
                  width="74"
                  height="74"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* <i className="devicon-sass-plain" /> */}
              </span>
              <h4>Figma</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Project Manager</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019 - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Adobe Company</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Team Leader</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2015 - 2019</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Twitter Inc</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Web Developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2010 - 2015</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Facebook</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Master Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2003</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>London University</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Bachelor Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>1999</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Berlin High School</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
