import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2 className="text-center">Gallery</h2>
            <div className="gallery-holder my-4">
                <img src="https://image3.jdomni.in/banner/8E/AE/E7/F07F966DC6DB9F73482020B18F_1506669800739.jpg?output-format=webp" alt="gallery" className="gallery" />
                <img src="https://image2.jdomni.in/banner/60/50/96/8ED0135D795ABAB90412DC3651_1506669817718.jpg?output-format=webp" alt="gallery" className="gallery" />
                <img src="https://image3.jdomni.in/banner/6A/E9/34/AE781B1E65EC9122591A96EAF5_1506669787406.jpg?output-format=webp" alt="gallery" className="gallery" />
            </div>
            <div class="video-holder">
                <iframe src="https://www.youtube.com/embed/3rmtaJ8hNts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
                <iframe src="https://www.youtube.com/embed/-H5WtojZHlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video me-3"></iframe>
            </div>
        </div>
    );
};

export default Gallery;