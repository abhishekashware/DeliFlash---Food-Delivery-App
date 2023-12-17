import {  ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import sanityclient from '../sanity'
import { useEffect,useState } from 'react'
import { urlFor } from '../sanity'

const Categories = () => {
  const [cat,setCat]=useState([]);
  useEffect(()=>{
    sanityclient.fetch(`
    *[_type=="category"]
    `).then(
      d=>setCat(d)
    )
  },[]);

  return (
    <ScrollView
    horizontal 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:15,
    paddingTop:10,
    }}>
    {cat?.map((c,i)=>(<CategoryCard key={i} imgUrl={urlFor(c.image).url()} title={c.name}/>))}
    </ScrollView>
  )
}

export default Categories