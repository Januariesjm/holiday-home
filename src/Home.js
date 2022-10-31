import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home_section'>
          <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeN6u14Oy-d3iqScay1gspF8OHNKRaACTubw&usqp=CAU"
          title="The best Online Experiences"
          description="Unique activities dedicated to fit our  hosts requirements OMG🤭 Just describe what you would like in your room" />
          <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720"
          title="Unique places you've never visited before"
          description="explore unique homes and rentals for your holidays" />
          <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720"
          title="Find your next stay for the holiday"
          description="Comfortable private places, with rooms for friends and family"
           />
        </div>
        <div className='home_section'>
          <Card
          src="https://a0.muscache.com/im/pictures/a5ccaa9e-2520-4151-81c4-2aec1d8fe98c.jpg?im_w=720"
          title="Beaches and beach front rooms"
          price="$20 per night" />
          <Card
          src="https://a0.muscache.com/im/pictures/0b25f6b3-f215-4938-ac81-581eb3929047.jpg?im_w=720"
          title="Summer holiday homes"
          price="$20 to $200 per night" />
          <Card
          src="https://a0.muscache.com/im/pictures/2a2834b6-7061-4b73-a01a-4ab8d638df68.jpg?im_w=720"
          title="National parks"
          price="$5 to $150 per visit" />
        </div>

    </div>
  )
}

export default Home