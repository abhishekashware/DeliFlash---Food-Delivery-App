import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [{
    name:"name",
    type:"string",
    title:"Restaurant Name",
    validation :(Rule)=>Rule.required()
  },
  {
    name:"short_description",
    type:"string",
    title:"Short Description",
    validation :(Rule)=>Rule.required()
  },

  {
    name:"image",
    type:"image",
    title:"Image of the Restaurant",
    validation :(Rule)=>Rule.required()
  },
  
  {
    name:"lat",
    type:"number",
    title:"Latitude of the Restaurant",
    validation :(Rule)=>Rule.required()
  },
  
  {
    name:"long",
    type:"number",
    title:"Longitude of the Restaurant",
    validation :(Rule)=>Rule.required()
  },

  {
    name:"address",
    type:"string",
    title:"Restaurant Address",
    validation :(Rule)=>Rule.required()
  },
  
  {
    name:"rating",
    type:"number",
    title:"Enter a rating ranging from 1-5 stars",
    validation :(Rule)=>Rule.required().min(1).max(5).error("Please enter a value between 1 and 3")
  },
  {
    name:"type",
    title:"Category",
    type:"reference",
    to:[{type:"category"}],
    validation :(Rule)=>Rule.required()
  },
  {
    name:"dishes",
    title:"Dishes",
    type:"array",
    of:[{type:"reference",to:[{type:"dish"}]}],
  },
  

  ],

})
