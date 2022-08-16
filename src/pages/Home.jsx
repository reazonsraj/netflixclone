import React from 'react'
import Main from '../components/Main'
import Row from './Row';

import requests from '../Requests';

export const Home = () => {
  return (
    <div>
<Main/>
<Row title ='Up Comining' fetchURL={requests.requestUpcoming}/>
<Row title ='Popular' fetchURL={requests.requestPopular}/>
<Row title ='Trending' fetchURL={requests.requestTrending}/>
<Row title ='Top Rated' fetchURL={requests.requestTopRated}/>
<Row title ='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home;
