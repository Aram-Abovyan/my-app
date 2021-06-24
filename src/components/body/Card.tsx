interface Image {
  img: string;
}

export const Card = ({ img }:Image) => {
  return (
    <div style={{
        backgroundImage:`url(${img})`
      }}
      className="card"
    >

    </div>
  )
}