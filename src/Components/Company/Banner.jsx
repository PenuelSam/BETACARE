import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <div className="m-bannerbg pt-[15%] lg:pt-[50%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="m-bannerH1">Welcome to Betacare</h1>
          <p className="m-bannerp">
          The go-to agency for manufacturing companies in need of temporary staff.
          </p>
          <div className="m-bannerBtns">
          <Link to='/personal'><button className="m-bannerBtnLeft">Register as an Operative</button></Link>
          </div>
        </div>
      </div>
  )
}

export default Banner