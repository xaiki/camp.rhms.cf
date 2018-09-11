import React from 'react'
import { withRouteData} from 'react-static'

const NewsShortItem = ({title}) => (
    <div>
        <a href="/news/2017-09-18-summer-school-started/">
            <div className="recent-news info-box right">

                <div className="icon-holder">

                    <span className="date">18</span>
                    <span className="month">Sep</span>
                </div>

                <div>
                    <p><strong>
                        {title}
                    </strong></p>
                    <p><span>The Summer School has started!</span><br /></p>
                </div>

            </div>
        </a>
    </div>
)

const Hero = withRouteData(({title, subtitle, date, place, posts}) => (
    <div className="container">

        <h1><a href="/">{title}</a></h1>
        <p className="subtitle">
            {subtitle}
        </p>

        <div className="url info-box">
            <div>
                <p><a href="http://declare17.de" target="_blank">www.declare17.de</a></p>
            </div>
        </div>

        <div className="when info-box">
            <div className="icon-holder">
                <i className="fa fa-calendar"></i>
            </div>
            <div>
                <p><strong>When</strong></p>
                <p><span>{date}</span></p>
            </div>
        </div>

        <div className="where info-box">
            <div className="icon-holder">
                <i className="fa fa-map-marker"></i>
            </div>

            <div>
                <p><strong>Where</strong></p>
                <p><span>{place.city} {place.state}</span><br />{place.location}</p>
            </div>

        </div>

        <div className="news-list">
            {posts.map(post => <NewsShortItem {...post} />)}
            <div className="archive-link">
                <a href="/archive/">&raquo; News Archive</a>
            </div>
        </div>

        <div className="image-attribution">

            <a href="https://www.flickr.com/photos/floris-oosterveld/9356064319" target="_blank">Background Image “Würzburg”</a> by <a href="https://www.flickr.com/people/floris-oosterveld/" target="_blank">Floris Oosterveld</a>
            (<a href="https://creativecommons.org/licenses/by/2.0" target="_blank">CC BY 2.0</a>)

        </div>
    </div>
))

export default Hero
