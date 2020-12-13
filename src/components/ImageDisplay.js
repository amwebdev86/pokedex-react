import { generateKeyProp } from '../utils';
import './css/ImageDisplay.css';
export default function ImageDisplay({ srcURLs, mode = 'list' }) {
  if (typeof mode !== 'string') mode = 'gallery';
  let imgDivClass = '';
  switch (mode) {
    case 'gallery':
      imgDivClass = 'img-gallery';
      break;
    case 'list':
      imgDivClass = 'img-list';
      break;
    default:
      imgDivClass = 'img-default';
  }

  return !srcURLs ? (
    <h3>No Images</h3>
  ) : (
    <div className={imgDivClass}>
      {srcURLs.map((url) => (
        <img
          className={imgDivClass + '-item'}
          src={url}
          key={generateKeyProp()}
          alt='the pokemon sprites from the game'
        />
      ))}
    </div>
  );
}
