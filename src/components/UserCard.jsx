import "./UserCard.css";

function UserCard({ name, email, telefone }) {
  return (
    <div className="user-card">
      <img
        className="user-card-avatar"
        src={`https://robohash.org/${name}`}
        alt=""
      />
      <div className="user-card-info">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{telefone}</p>
      </div>
    </div>
  );
}

export default UserCard;
