import React from 'react'
import VideoCard from './VideoCard'

const videosData = [
    {
        id : 1,
        thumbnailLink : "https://res.cloudinary.com/dye48qqoi/image/upload/v1700911453/samples/cup-on-a-table.jpg",
        publisherPhotoLink : "https://res.cloudinary.com/dye48qqoi/image/upload/c_thumb,w_200,g_face/v1715669529/duhr9fvwfxxtv5ul3hyb.jpg"
    },
    {
        id : 2,
        thumbnailLink : "https://res.cloudinary.com/dye48qqoi/image/upload/v1700911453/samples/cup-on-a-table.jpg",
        publisherPhotoLink : "https://res.cloudinary.com/dye48qqoi/image/upload/c_thumb,w_200,g_face/v1715669529/duhr9fvwfxxtv5ul3hyb.jpg"
    },
    {
        id : 3,
        thumbnailLink : "https://res.cloudinary.com/dye48qqoi/image/upload/v1700911453/samples/cup-on-a-table.jpg",
        publisherPhotoLink : "https://res.cloudinary.com/dye48qqoi/image/upload/c_thumb,w_200,g_face/v1715669529/duhr9fvwfxxtv5ul3hyb.jpg"
    },
    {
        id : 4,
        thumbnailLink : "https://res.cloudinary.com/dye48qqoi/image/upload/v1700911453/samples/cup-on-a-table.jpg",
        publisherPhotoLink : "https://res.cloudinary.com/dye48qqoi/image/upload/c_thumb,w_200,g_face/v1715669529/duhr9fvwfxxtv5ul3hyb.jpg"
    },
    {
        id : 5,
        thumbnailLink : "https://res.cloudinary.com/dye48qqoi/image/upload/v1700911453/samples/cup-on-a-table.jpg",
        publisherPhotoLink : "https://res.cloudinary.com/dye48qqoi/image/upload/c_thumb,w_200,g_face/v1715669529/duhr9fvwfxxtv5ul3hyb.jpg"
    },
    {
        id : 6,
        thumbnailLink : "https://res.cloudinary.com/dye48qqoi/image/upload/v1700911453/samples/cup-on-a-table.jpg",
        publisherPhotoLink : "https://res.cloudinary.com/dye48qqoi/image/upload/c_thumb,w_200,g_face/v1715669529/duhr9fvwfxxtv5ul3hyb.jpg"
    }
]

const VideoGrid = () => {
  return (
    <div className='grid grid-cols-12'>
        {
            videosData.map((video) => {
                return <div key={video.id} className='col-span-12 lg:col-span-6 xl:col-span-4 mb-2 mx-auto'> 
                    <VideoCard thumbnailLink={video.thumbnailLink} publisherPhotoLink={video.publisherPhotoLink}/>
                </div>
            })
        }
      
    </div>
  )
}

export default VideoGrid
