import { Sidebar } from 'flowbite-react';

import { Link} from 'react-router-dom';

export default function Welcome() {

  return (
    <Sidebar className='w-full md:w-56 bg-gray-1800'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
            <Link to='/dashboard'>
            <Sidebar.Item
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
            </Link>
            <Link to='/search'>
            <Sidebar.Item
              labelColor='dark'
              as='div'
            >
              search info lite
            </Sidebar.Item>
            </Link>
            <Link to='/getinfo'>
            <Sidebar.Item
              labelColor='dark'
              as='div'
            >
              search info 
            </Sidebar.Item>
            </Link>
            <Link to='/comment'>
            <Sidebar.Item
              labelColor='dark'
              as='div'
            >
              Comments
            </Sidebar.Item>
            </Link>
            <Link to='/update'>
            <Sidebar.Item
              labelColor='dark'
              as='div'
            >
              Update Database (only admin)
            </Sidebar.Item>
            </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
