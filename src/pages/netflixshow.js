import React from 'react'
import Row from '../components/Row/row'
import api from '../apis/api'
import Banner from '../components/Banner/banner'
import Nav from '../components/Nav/nav'

const NetflixShow = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Row title = 'NETFLIX-ORIGINALS' fetchUrl = {api.fetchNetflixOriginals} isLargeRow/>
      <Row title = 'Trending Now' fetchUrl = {api.fetchTrending} isLargeRow/>
      <Row title = 'Top Rated' fetchUrl = {api.fetchTopRated} isLargeRow/>
      <Row title = 'Action Movies' fetchUrl = {api.fetchActionMovies} isLargeRow/>
      <Row title = 'Comedy Movies' fetchUrl = {api.fetchComedyMovies} isLargeRow/>
      <Row title = 'Horror Movies' fetchUrl = {api.fetchHorrorMovies} isLargeRow/>
      <Row title = 'Romance Movies' fetchUrl = {api.fetchRomanceMovies} isLargeRow/>
      <Row title = 'Documentaries' fetchUrl = {api.fetchDocumentaries} isLargeRow/>
    </div>
  )
}

export default NetflixShow