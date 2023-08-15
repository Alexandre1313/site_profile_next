
const VideoComponentTwo = () => {
    return (
        <div className="">
            <iframe className="absolute top-0 left-0 w-full h-full"                
                src="https://www.youtube.com/embed/TzufYnZUmz4"
                title="YouTube video player"                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen               
            ></iframe>           
        </div>
    )
}

export default VideoComponentTwo
