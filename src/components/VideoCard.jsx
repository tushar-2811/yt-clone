import React from 'react'

const VideoCard = ({
    thumbnailLink,
    videoName,
    videoLength,
    totalViews,
    publisherName,
    publisherPhotoLink,
    isPublisherVerified = true
}) => {
    return (
        <div className='w-96 border rounded-lg overflow-hidden '>
            {/* Thumbnail and Video Length */}
            <div className='relative'>
                <img src={thumbnailLink} alt="thumbnail" className='w-full h-auto object-cover' />
                <span className='absolute right-2 bottom-2 text-red-500 bg-black/75 text-xs px-1 py-0.5 rounded'>
                    {videoLength || "50:23"}
                </span>
            </div>

            {/* Publisher Info and Video Details */}
            <div className='flex p-3'>
                <div className="flex-shrink-0">
                    <img src={publisherPhotoLink} alt="publisher photo" className='w-10 h-10 rounded-full' />
                </div>
                <div className='ml-3'>
                   
                    <h1 className='text-sm font-bold '>{videoName || "Video Name"}</h1>
                    <h2 className='text-xs text-gray-600 flex items-center'>
                        {publisherName || "Publisher Name"}
                        {isPublisherVerified && <svg className='w-4 h-4 ml-1 text-blue-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L15.09 8.26L23 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L1 9.27L8.91 8.26L12 1Z" />
                        </svg>}
                    </h2>
                    <h3 className='text-xs text-gray-500'>{totalViews || "100k"} views </h3>
        
                </div>
            </div>
        </div>
    )
}

export default VideoCard
