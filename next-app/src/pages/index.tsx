import Flora from "../@styled-components/flora";
import {Button, Container} from "@mui/material"
import { Carousel1 } from "../@components/home.carousel1";
import Space from "../@styled-components/space";
import Header from "../@styled-components/header";
import Carousel2 from "../@components/home.carousel2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Carousel3 from "../@components/home.carousel3";
import Carousel4 from "../@components/home.carousel4";

export default function Home() {

  const datas1 = [
    {
      "year": "2022",
      "link": ""
    },
    {
      "year": "2022",
      "link": ""
    },
    {
      "year": "2022",
      "link": ""
    },
  ]

  return (<>
    <Container className="flex flex-col items-center">
      <div className="rw-1 h-[calc(100vh-2rem)] flex flex-col items-center bg-gray-200 rounded-2xl py-12 px-4 my-4">
        <div className="-rotate-[5deg] font-extrabold text-2xl">
          <p className="mb-6 z-1 relative before:absolute before:-top-2 before:-bottom-2 before:-left-2 before:right-1/4 before:bg-white before:z-[-1]">Placement And</p>
          <p className="mb-6 z-1 relative before:absolute before:-top-2 before:-bottom-2 before:-left-2 before:right-2 before:bg-blue-100 before:z-[-1] w-auto">Training</p>
          <p className="mb-12">Cell</p>
        </div>
        <img className="object-contain h-[300px]"/>
        <p className="text-lg font-bold font-italic text-center">A carefully curated space for sharing all placement related activities in order to motivate and facilitate students to train meticulously and achieve great results.</p>
      </div>
      <Space />
      <Header text={"placement statistics 2022"} />
      <Carousel1 />
      <Space />
      <Header text={"our major recruiters"} />
      <p className="my-4 text-center">
        It is a proud moment for us to present our major recruiters. We have been constantly inundated with support from these successful companies who have provided deserving positions to our students.
      </p>
      <Carousel2 />
      <Space />
      <Header text={"from placement officer's desk"}/>
      <Flora flower={["top-0 right-0 translate-x-1/3 h-[150px]"]} className="w-full flex flex-col justify-center items-center">
       <img className="my-12 w-[200px] h-[200px] rounded-full bg-gray-200" /> 
       <p className="text-lg text-center font-bold"> Dr.K.Ramesh </p>
       <p className="text-center"> Placement And Training Officer </p>
       <p className="mt-12">
        I have immense pleasure and pride in introducing you to our bright, vibrant and  young graduates. Government College Technology remains committed to its already well established goodwill. It also  promises to continue to bring glory to this nation. The quality of education and exposure that the students acquire from GCT coupled with their soft skills, make them confident that they are adequately prepared to face the challenges of the corporate world. I am rest assured that our students will definitely contribute meaningfully in the growth and flourish of your organization and you will greatly benefit from their association with your company It is heartening to note that students have already begun the activities concerned With placements like soft skills development,mock group discussions and allied Exercises for the year 2022-23. Like a tree, one must find a place to grow and branch out. I hope hard work, sincerity and updated knowledge in their own domains, coupled with soft-skills will always pave way for our students to find the best places to grow. I also take this opportunity to thank all the industries for their unflinching support and patronage that GCT has been enjoying . I wish the students and organizations for an  impressive and fruitful placement stint in GCT for the year 2022-23.
       </p>
      </Flora>
      <Space />
      <Flora className="flex justify-center items-center" flower={["top-0 left-0 -translate-x-1/2 h-[200px]"]}>
        <div className="bg-gray-100 rounded-3xl rw-2 my-12 py-12 px-4">
          <Header text={"placement records"}/>
          <p className="my-12 text-center">We set those impossible records and broke them into million pieces by achieving greater success.
-An Assortment of our Achievements</p>
          <img className="object-contain my-12 h-[300px] bg-gray-300 w-full"/>
          {datas1.map((data, i) => (<div key={i} className="flex m-4 justify-between items-center">
            <FontAwesomeIcon className="text-slate-600 text-2xl" icon={faCalendar}/>
            <p className="text-lg font-bold"> {data.year} </p>
            <Button className="bg-primary-main" variant="contained"> download </Button>
          </div>))}
        </div>
      </Flora>
      <Space />
      <div className="bg-gray-100 rounded-3xl py-12 px-4 flex flex-col items-center w-full"> 
        <Header text={"insights of students"}/>
        <p className="text-center m-4">Nothin is more valuable than sharing our thoughts and experience in this world, and our world began at GCT.</p>
        <Carousel3 />
      </div>
      <Space />
      <div>
        <Header text={"peculiar peeks"} />
        <p className="text-center">A glimpse of all the internal activities of each department.</p>
        <Carousel4 />
      </div>
    </Container>
  </>)
}
















