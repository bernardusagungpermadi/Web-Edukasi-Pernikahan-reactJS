
import { Post } from '../components/Post-Artikel/Post'
import {Search} from '../components/Search/Search'
import { Fragment } from 'react'
import SimpleSlider from '../components/Slider/SliderArtikel'

const Artikel = () => {
  return (
    <Fragment>
   
      <Search />
      <SimpleSlider />
      <Post />
   
    </Fragment>
      )
}

export default Artikel