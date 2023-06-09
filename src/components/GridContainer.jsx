import HotArticle from "./HotArticle";
import New from "./New";

const GridContainer = () => {
  return (
    <div className="grid-container">
      <picture className="_1">
        <img src="/image-web-3-desktop.jpg" alt="" />
      </picture>
      <picture className="mobile _1">
        <img src="/image-web-3-mobile.jpg" alt="" />
      </picture>
      <New />
      <h1 className="_3">The Bright Future of Web 3.0?</h1>
      <div className="_4">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
      <HotArticle />
    </div>
  );
};

export default GridContainer;
