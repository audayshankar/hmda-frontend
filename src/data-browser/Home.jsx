import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageCard from './ImageCard.jsx'
import Heading from '../common/Heading.jsx'
import { withAppContext } from '../common/appContextHOC'

import './Home.css'

class Home extends Component {
  render() {
    const { showMaps } = this.props.config
    return (
      <div className="home">
        <div className="intro">
          <Heading type={1} headingText="HMDA Data Browser">
            <p className="lead">The HMDA Data Browser allows users to filter, analyze, and download HMDA datasets and visualize data through charts, graphs, and maps.</p>
            <p className="lead">For questions about the HMDA Data Browser, visit our <Link to="/documentation/2018/data-browser-faq/">FAQ page</Link>.</p>
            <p className="lead">To learn to use the Data Browser API, peruse our <a href="https://cfpb.github.io/hmda-platform/#data-browser-api">API Documentation</a>.</p>
          </Heading>
        </div>

        <h3>I&#39;m interested in:</h3>

        <div className="card-container">
          <ImageCard
            year="2018"
            caption="HMDA Dataset Filtering"
            path="data"
            enabled
          >Filter and download HMDA datasets by various filters.
          </ImageCard>
          <ImageCard
            year="2018"
            caption={`Maps & Graphs${showMaps ? '' : ' (coming soon)'}`}
            path="maps-graphs"
            enabled={showMaps ? true : false }
          >
          Visualize HMDA data through charts, graphs, and maps.
          </ImageCard>
        </div>
      </div>
    )
  }
}

export default withAppContext(Home)
