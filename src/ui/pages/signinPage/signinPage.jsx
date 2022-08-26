import Navbar from "../../components/navbar/navbar";
import Signin from "../../components/signinForm/signin";
import "./signinPage.css"

function SigninPage() {
  return (
    <div id="signinpage">
      <div id="nav">
        <Navbar />
      </div>
      <div id="signinn">
        <Signin />
      </div>
    </div>
  )
}

export default SigninPage