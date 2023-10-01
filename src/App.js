import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Profile List </h1>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1154642632-612x612_kb8zhf.jpg"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h1 className="name"> Ramya</h1>
              <p className="role"> Software Developer</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1300512215-170667a_gflgsv.webp"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h1 className="name">Kevin</h1>
              <p className="role"> React Developer</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1696157464/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_fxhbjx.jpg"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h1 className="name">Sradha</h1>
              <p className="role">Node Developer</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1696157465/portrait-smiley-business-man_vs8cxh.jpg"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h1 className="name">john</h1>
              <p className="role">Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1696157467/portrait-young-confident-businessman-wearing-glasses_j1miag.jpg"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h1 className="name">Harry</h1>
              <p className="role"> Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1692264085/cld-sample.jpg"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h1 className="name">Recho</h1>
              <p className="role">UI Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
