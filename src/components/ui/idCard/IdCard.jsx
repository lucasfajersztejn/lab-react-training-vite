import './IdCard.css'
import Information from './Information';
import ImageAvatar from './ImageAvatar';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props.user;

  return (
    <section className='container_IdCard'>
      <div>
        <ImageAvatar image={picture} />
      </div>

      <div>
        <Information 
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          height={height}
          birth={birth}
        />
      </div>
    </section>
  );
}

export default IdCard;