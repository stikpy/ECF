import Link from 'next/link';
import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function ReturnTop() {
  return (
    <Link href="#navlist" passHref>
      <div className='fixed bottom-20 z-20 right-10'>
        <ArrowCircleUpIcon 
          color="primary"
          fontSize="large"
          sx={{ ':hover': { color: 'secondary' } }}
        />
      </div>
    </Link>
  );
}
