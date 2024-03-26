import { useEffect } from "react"

const Banner = () => {

  useEffect(()=>{


    return () => {
      console.log("Desmontando Banner....")
    }
  })

  return(
    <img src="/img/banner.jpg" style={{ width: "10%" }} />
  )
}

export default Banner