import React from 'react'
import Navbar from "./Navbar"
import Intro from "./Intro"
import Contact from "./Contact"
import { Image } from 'semantic-ui-react'

const Home = (props) => (
  <>
  <Navbar />
  <Image src='https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' fluid />
  <Intro />
  <Contact />
  </>
)

export default Home
