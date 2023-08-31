import React from 'react'
import UserTable from '../components/UserTableView/page'
import { PrismaClient } from '@prisma/client';
import TestimonialTableView from '../components/TestimonialTableView/page';

const prisma = new PrismaClient();

function TestView() {


  return( 
    <>
        <UserTable />
        <TestimonialTableView />

    </>
  )
}

export default TestView