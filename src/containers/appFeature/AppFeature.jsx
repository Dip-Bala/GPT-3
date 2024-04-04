import React from 'react';
import Feature from '../../components/feature/Feature';
import '../../components/feature/Feature.css';
import "./AppFeature.css";

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const AppFeature = () => {
  return (
    <div className = "gpt3-appFeature">
        <div className = "gpt3-appFeature-heading">
           <h1 className = "gradient-text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1> 
           <p>Request Early Access to Get Started</p>
        </div>
        <div className = "gpt3-appFeature-features">
            {featuresData.map((item, index) => {
                return <Feature
                key = {index}
                id = {index}
                title = {item.title}
                text = {item.text}/>
            })}
        </div>
    </div>
  )
}

export default AppFeature