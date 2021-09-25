import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
    address: 'Some Address 10, 1234 Some City',
    description: 'This is a first meetup description',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://assets.unenvironment.org/2020-02/sustainable-cities.jpg',
    address: 'Some Address 10, 1234 Some City',
    description: 'This is a first meetup description',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
