const Profile = props => {
  return (
    <div>
      <img alt="avatar" src={props.avatar_url} />
      <div>
        <div>{props.name}</div>
      </div>
    </div>
  )
}