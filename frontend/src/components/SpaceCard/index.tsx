import { useNavigate } from 'react-router-dom';

import CardTitle from '@/components/_common/CardTitle';

import styles from './styles';

type SpaceCardProps = {
  spaceName: string;
  imageUrl: string;
  id: number;
};

const SpaceCard = ({ spaceName, imageUrl, id }: SpaceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(id.toString());
  };

  return (
    <div css={styles.spaceCard({ imageUrl })} onClick={handleClick}>
      <CardTitle>{spaceName}</CardTitle>
    </div>
  );
};

export default SpaceCard;
