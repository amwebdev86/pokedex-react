import ImageDisplay from './ImageDisplay';
import './css/PokedexDisplay.css';
export default function Display({
  id,
  name,
  baseXP,
  height,
  order,
  weight,
  sprites,
}) {
  const nameDisplay = (
    <h1>
      #{id}-{name.toUpperCase()}
    </h1>
  );
const infoTable = (
  <table className='pokedex-display-table'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Order</th>
        <th>Base XP</th>
        <th>Height</th>
        <th>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{order}</td>
        <td>{baseXP}</td>
        <td>{height} M</td>
        <td>{weight} kg</td>
      </tr>
    </tbody>
  </table>
);
  return (
    <div className='pokedex-display'>
      <main>
        <h1>
          {nameDisplay}
        </h1>
        <ImageDisplay srcURLs={sprites} mode='gallery' />
        <section>
         {infoTable}
        </section>
      </main>
    </div>
  );
}
