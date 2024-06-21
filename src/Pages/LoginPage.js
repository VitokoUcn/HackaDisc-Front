import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <section className="text-center">
      <div className="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: "300px"
      }}></div>
    
      <div className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary" style={{
        marginTop: "-100px",
        backdropFilter: "blur(30px)"
      }}>
        <div className="card-body py-5 px-md-5">
    
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign in</h2>
              <form>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>
    
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
    
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-block mb-4"
                  style={{ backgroundColor: '#8fc848', color: 'white', border: 'none' }}
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
