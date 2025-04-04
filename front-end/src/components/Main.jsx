import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import {songsArray} from '../assets/database/songs'


const Main = ({type}) => {
  return (
    <div className='main'>
      {/* ItemList Artistas */}
      {type === 'artists'|| type === undefined ? (
        <ItemList 
        title='Artistas' 
        items={8} 
        itemsArray={artistArray} 
        path="/artists"
        idPath="/artist"
        />
      )
      : 
      <></>
      }
        
      {/* ItemList Musicas */}
      {type === 'songs' || type === undefined ?(
        <ItemList 
        title='Músicas' 
        items={24} 
        itemsArray={songsArray} 
        path="/songs" 
        idPath="/song"
        />
      ) 
      :
      <></>
      }
      
    </div>
  )
}

export default Main
