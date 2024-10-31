function Card(props) {
  const { title, backgroundColor, children } = props;
  return (
    <div
      style={{
        margin: 8,
        padding: 25,
        borderRadius: 10,
        boxShadow: "0px 0px 7px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;