import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  label: string;
}

export const ImgMediaCard: React.FC<Props> = ({ label }) => {

  const [clicked, setClicked] = React.useState(false);
  const handlerCard = () => {
    setClicked(!clicked)
  }

  return (
    <Card sx={{ maxWidth: 229, mb: "35px", mx: "35px", borderRadius: "10px" }} onClick={() => { handlerCard() }}>
      <CardMedia
        component="img"
        alt="card media"
        height="100"
        image={require('../assets/images/CardMedia.png')}
      />
      <CardActions>
        <FormControlLabel
          control={
            <Checkbox
              checked={clicked}
              style={{
                color: "#21B6A8",
              }} />}
          label={label} />
      </CardActions>
    </Card>
  );
}