import ImageDisplay from './ImageDisplay';

export default function Display({
  id,
  name,
  baseXP,
  height,
  order,
  weight,
  sprites,
}) {
  let picTestArr = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ];
  return (
    <div className='display'>
      <main>
        <h1>{name.toUpperCase()}</h1>
        <ImageDisplay srcURLs={picTestArr} mode='gallery' />
        <section>
          <table>
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
        </section>
      </main>
    </div>
  );
}
