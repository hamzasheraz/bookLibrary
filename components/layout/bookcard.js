import { genres } from "@/helper"

const Bookcard = ({book}) => {
  const genre_name=genres.filter((genre) => genre.id === book.genreId).map((genre) => genre.name);
  return (
    <div key={book.id} className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text"><small className="text-muted">Genre: {genre_name}</small></p>
          <p className="font-weight-bold text-success">${book.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Bookcard