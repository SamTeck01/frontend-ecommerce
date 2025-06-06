import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';

const CardComponent = ({ title, description, image, to }) => {
  return (
    <Link to={to} className="block">
      <Card
        className="bg-white shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-lg"
        sx={{ maxWidth: 240, maxHeight: 320 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            className="object-top h-[210px] mx-auto transition-transform duration-300 group-hover:scale-105"
            image={image}
            alt={title}
          />
          <CardContent className="!p-[14px] ">
            <Typography
              gutterBottom
              variant="body1"
              className="text-[14px] !-mt-2"
            >
              {title}
            </Typography>
            <Typography variant="body2" className="font-medium mt-2 text-ash truncate">
              {description}
            </Typography>
            <div
              className="float-end mb-2 mt-2 bg-ash-200 hover:bg-secondary-700 text-white px-5 py-1 rounded"
            >
              Learn more
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CardComponent;
