import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">Registration Form</h3>
              <form>
                <div className="row mb-3">
                  <label htmlFor="name" className="col-sm-4 col-form-label text-end">Full Name:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-4 col-form-label text-end">Email:</label>
                  <div className="col-sm-8">
                    <input type="email" className="form-control" id="email" placeholder="example@example.com" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="password" className="col-sm-4 col-form-label text-end">Password:</label>
                  <div className="col-sm-8">
                    <input type="password" className="form-control" id="password" placeholder="••••••••" />
                  </div>
                </div>
                <div className="row mb-4">
                  <label htmlFor="confirmPassword" className="col-sm-4 col-form-label text-end">Confirm Password:</label>
                  <div className="col-sm-8">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="••••••••" />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-100">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
