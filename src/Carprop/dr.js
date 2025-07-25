const dr = ({ car }) => {
    const { name, model, price, colour } = car;
    return (
      <div>
        <p>{name}</p>
        <p>{model}</p>
        <p>{price}</p>
        <p>{colour}</p>
      </div>
    );
  };

export default dr;