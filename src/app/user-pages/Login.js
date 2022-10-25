import React from 'react';
import { Form } from 'react-bootstrap';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth'

function Login() {

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result)
      window.location.replace('/realtime')
      const name = result.user.displayName
      const profilPic = result.user.photoURL

      localStorage.setItem("name", name)
      localStorage.setItem("profilPic", profilPic)

    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <h3>WEB Weather Station</h3>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <div className="my-2 d-flex justify-content-between align-items-center">
                </div>
                <div className="mb-2">
                  <button onClick={signInWithGoogle} type="button" className="btn btn-block btn-google auth-form-btn">
                    <i className="mdi mdi-google"></i>Connect using google
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
