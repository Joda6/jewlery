'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Image from 'next/image'
import {searchcont} from '../searchcontext'
import { useRouter } from 'next/navigation'
import { useContext } from 'react';
export default function Home() {
  const router = useRouter()
    const {search} = useContext(searchcont)
  const Ring = [
      { title: 'Golden Elegance', description: '18K gold with diamonds', price: '$499' ,id:6},
      { title: 'Silver Grace', description: 'Sterling silver necklace', price: '$249' ,id:5},
      { title: 'Pearl Charm', description: 'Pearl necklace with gold clasp', price: '$399',id:4 }
    ];
  
  return (
    <div
      style={{
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: '20px',
        marginLeft: '20px',
        flexWrap: 'wrap',
        gap: '30px'
      }}
      className='Cards'
    >
        {Ring.filter (function (item) {
            return(
            item.title.toLowerCase().includes(search.toLowerCase()))
        })
    .map((earin) => (
        <Card key={earin.id}sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image
              src="/rg.jfif"
              alt="jewelry banner"
              width={1200}
              height={500}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {earin.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {earin.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{ color: 'rgb(158, 124, 74)' }}
            onClick={function () {
          const cart = JSON.parse(localStorage.getItem('cart'))|| []
                   cart.push(earin)
                   localStorage.setItem('cart',JSON.stringify(cart))

                             router.push(`/product/${earin.id}`)

            
            }}
            >
              {earin.price}
              Add
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
