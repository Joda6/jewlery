import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    
    <div style={{paddingTop:'20px',paddingLeft:'20px',
    paddingBottom:'20px', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginRight:'20px'
    ,marginLeft:'20px',
    flexWrap:'wrap',gap:'30px'}} className='Cards'>
     <Link href={'Necklace'}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <Image
         src="/nk.jfif"
         alt="jewelry banner"
         width={1200}
         height={500}
       />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Necklace
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Timeless gold necklace crafted with elegance and precision. 
A delicate piece that adds a touch of luxury to any outfit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:'rgb(158, 124, 74)'}}>
          see more Necklace
        </Button>
      </CardActions>
    </Card></Link>
    <Link href={'Ring'}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <Image
         src="/rg.jfif"
         alt="jewelry banner"
         width={1200}
         height={500}
       />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
           Ring
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Elegant gold ring designed to shine with every movement. 
A symbol of beauty, confidence, and everlasting style.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  style={{color:'rgb(158, 124, 74)'}}>
         see more rings
        </Button>
      </CardActions>
    </Card></Link>
    <Link href={'Earrings'}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <Image
         src="/er.jfif"
         alt="jewelry banner"
         width={1200}
         height={500}
       />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Earrings
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             A refined piece designed to express elegance and timeless beauty.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  style={{color:'rgb(158, 124, 74)'}}>
         see more  Earrings
        </Button>
      </CardActions>
    </Card>
   </Link>
    </div>
  
  );
}
