import BecomeFriend from '@/app/Home/Components/BecomeFriend'
import DailySocialMedia from '@/app/Home/Components/DailySocialMedia';
import JoinUs from '@/app/Home/Components/JoinUs';
import { client } from '@/lib/sanity.client';
import React from 'react'


const Page = async () => {
    const becomeFriend = await client.fetch(`
    *[_type == "becomeFriend"][0]{
      title,
      pointsTitle,
      points
    }
  `,
        {},
        { cache: "no-store" }
    );

    return (
        <div className=''>
            <BecomeFriend friendData={becomeFriend} />
            <JoinUs />
            <DailySocialMedia />

        </div>
    )
}

export default Page;
