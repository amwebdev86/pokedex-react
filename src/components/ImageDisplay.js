import './css/ImageDisplay.css'
export default function ImageDisplay({ srcURLs, mode='list' }) {
    if (typeof (mode) === 'string') mode = null;
    let imgDivClass = '';
    switch (mode) {
        case 'gallery':
            imgDivClass = 'img-gallery';
            break;
        case 'list':
            imgDivClass = 'img-list';
            break;
        default:
            imgDivClass = 'img-default'
            

    }
    return !srcURLs ? (<h3>No Images</h3>) : (
        <div className={imgDivClass}>
            {srcURLs.map(url => (
                <img  src={url}/>
            ))}
        <img src={srcURLs} />
      </div>
    );
}