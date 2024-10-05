import "./progressBar.css";

const ProgressBar = () => {
  return (
    <div className="container">
    <div className="skill-subtitle">
      <h3>
        <span>Skills</span>
      </h3>
      </div>
      <section>
        <div className="bars">
          <div className="bar">
            <i className="bx bxl-html5"></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span style={{width:'60%'}} data-progress="60%"></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-javascript"></i>
            <div className="info">
              <span>Javascript</span>
              </div>
            <div className="progress-line javascript">
              <span style={{width:'70%'}} data-progress="60%"></span>
            </div>
          </div>

     

          <div className="bar">
          <i className='bx bxl-react' ></i>
          <div className="info">
          <span>React</span>
              </div>
            <div className="progress-line java">
              <span style={{ width: '70%' }} data-progress="60%"></span>
            </div>
          </div>


          <div className="bar">
            <i className="bx bxl-java"></i>
            <div className="info">
            <span>Java</span>
              </div>
            <div className="progress-line">
              <span style={{ width: '60%' }} data-progress="60%" ></span>
            </div>
          </div>

        
          <div className="bar">
          <i className='bx bxl-spring-boot' ></i>
          <div className="info">
          <span>SPRING-BOOT</span>
              </div>
            <div className="progress-line spring-boot">
            <span style={{ width: '65%' }} data-progress="60%"></span>
            </div>
          </div>

          <div className="bar">
          <i className='bx bxl-python' ></i>
          <div className="info">
          <span>PYTHON</span>
              </div>
            <div className="progress-line python">
              <span style={{ width: '60%' }} data-progress="60%"> </span>
            </div>
          </div>


          <div className="bar">
          <i className='bx bxl-aws' ></i>
            <div className="info">
            <span>AWS</span>
              </div>
            <div className="progress-line aws">
              <span  style={{ width: '10%' }} data-progress="60%"></span>
            </div>
          </div>
        </div>
      </section>
  
      </div>
  );
};

export default ProgressBar;
