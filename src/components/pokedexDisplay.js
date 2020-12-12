export default function Display({ id, name, baseXP, height, order, weight }) {
  return (
    <div className='display'>
      <main>
        <h1>{name}</h1>
        <section>
          <table>
            <tr>
              <th>ID</th>
              <th>Order</th>
              <th>Base XP</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{order}</td>
              <td>{baseXP}</td>
              <td>{height} M</td>
              <td>{weight} kg</td>
            </tr>
          </table>
        </section>
      </main>
    </div>
  );
}
