import { useEffect } from "react"

const Banner = () => {
  
  useEffect(()=>{


    return () => {
      console.log("Desmontando Banner....")
    }
  })

  return(
    <img src="" style={{ width: "10%" }} />
  )
}

export default Banner