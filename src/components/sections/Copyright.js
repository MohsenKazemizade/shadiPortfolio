const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        {/* <span>© {new Date().getFullYear()} Steven Walker</span> */}
        <span>
          Designed By{" "}
          <a target="_blank" href="https://mohsenkazemi.com/">
            MaisonDevs
          </a>
        </span>
        <ul>
          <li>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/mohsen-kazemizade/"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
