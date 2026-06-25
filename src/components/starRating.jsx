import { Star } from 'lucide-react'
import React from 'react'

export default function starRating({count=5}) {
    
  const stars = Array(5).fill(0)
  
  return (
    <div>
      {
        stars.map((item,index)=>{
          return (
            <div>
              <Star />
            </div>
          )
        })
      }
    </div>
  )
}
