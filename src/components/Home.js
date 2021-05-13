import React from 'react';
import Banner from './Banner';
import '../styles/Home.css';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home-section">
                <Card src='https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                title='English room' description='Cow venison ham, ground round pastrami jerky fatback shoulder strip steak leberkas pork chislic shank drumstick.' />
                <Card src='https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
                title='1 Bedroom room' description='Cow shoulder strip steak leberkas pork chislic shank drumstick.' />
                <Card src='https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                title='3 Bedroom room' description='Cow venison ham, ground round pastrami jerky fatback shoulder drumstick.' />
            </div>
            <div className="home-section">
                <Card src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                title='Medieval Styled House' price='300' description='Cow venison ham, ground round pastrami jerky fatback shoulder strip steak leberkas pork chislic shank drumstick.' />
                <Card src='https://images.unsplash.com/photo-1594563703937-fdc640497dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
                title='Modern Styled House' price='200' description='Cow venison ham, ground round pastrami jerky fatback shoulder strip steak leberkas pork chislic shank drumstick.' />
                <Card src='https://images.unsplash.com/photo-1553509990-7686c6f0fae1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80'
                title='Open Spaced House'price='200' description='Cow venison ham, strip steak leberkas pork chislic shank drumstick.' />
            </div>
        </div>
    )
}

export default Home
