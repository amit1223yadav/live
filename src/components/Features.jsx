import React from 'react';

const items = [
  { 
    t: 'Personalised designs',
    img: 'https://images.livspace-cdn.com/w:60/h:60/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/usp-icons-1657525878-VEDjj/personalised-design-60x60-1657526074-fzE3H.png'
  },
  { 
    t: 'Flat 10-year warranty',
    img: 'https://images.livspace-cdn.com/w:60/h:60/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/10-year-warranty-desktop-1646210954-fh1K8.png'
  },
  { 
    t: 'Transparent pricing',
    img: 'https://images.livspace-cdn.com/w:60/h:60/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/transparent-pricing-desktop-1646210957-nGL2T.png'
  }
];

export default function Features() {
  return (
    <div className="py-8">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {items.map((it, idx) => (
          <div 
            key={idx} 
            className="flex-1 min-w-[200px] max-w-[250px] text-center py-6"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
              <img src={it.img} alt={it.t} className="w-10 h-10 object-contain" />
            </div>
            <div className="mt-3 text-sm font-medium">{it.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
