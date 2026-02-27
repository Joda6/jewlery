'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function CartPage() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])

  function handleDelete(id) {
    const updatedCart = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }



  return (
    <div style={{
      display:'flex', 
      flexWrap:'wrap', 
      justifyContent:'center', 
      gap:'30px', 
      padding:'50px'
    }}>
      {cart.map(product => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image
              src="/j.jfif"
              alt={product.title}
              width={1200}
              height={500}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{ color: 'rgb(158, 124, 74)' }}>
              {product.price}
            </Button>
            <Button 
              size="small" 
              color="error"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}