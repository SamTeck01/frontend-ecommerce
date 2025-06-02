import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardComponent = ({ title, description, image, to }) => {
  return (
    <Link to={to} className="block">
      <Card
        className="bg-white shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-lg"
        sx={{ maxWidth: 300 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            className="object-cover object-top h-[175px] md:h-56 lg:h-56 transition-transform duration-300 group-hover:scale-105"
            image={image}
            alt={title}
          />
          <CardContent className="!p-[10px] md:!p-3 lg:!p-3">
            <Typography
              gutterBottom
              variant="body1"
              className="my-[6px] font-medium text-base line-clamp-2 text-slate-800"
            >
              {title}
            </Typography>
            <Typography variant="body2" className="text-ash">
              {description}
            </Typography>
            <IconButton
              aria-label="Learn more"
              className="h-[25px] !rounded-3xl font-semibold float-end"
            >
              <a href="/"><p className="text-gold text-xs ms-1">Learn more</p></a> 
            </IconButton>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardComponent;
