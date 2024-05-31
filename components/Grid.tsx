import React from 'react'
import { BentoGridItem, BentoGrid } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[
                {title: 'Title1', description: 'Desc1', id:1},
                {title: 'Title1', description: 'Desc2', id:2},
                {title: 'Title1', description: 'Desc3', id:3},
                {title: 'Title1', description: 'Desc4', id:4},
                {title: 'Title1', description: 'Desc5', id:5},
                {title: 'Title1', description: 'Desc6', id:6},
            ].map((item, i) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid