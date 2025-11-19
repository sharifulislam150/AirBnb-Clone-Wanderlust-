const SampleListings = [
  { title: "Grand Mountain Estate with Panoramic Views",
    description: "An expansive and luxurious mountain estate offering unparalleled panoramic views of the surrounding peaks and valleys. This secluded retreat features multiple bedrooms, gourmet kitchen, private spa, and direct access to hiking and skiing trails. Perfect for large families or groups seeking an unforgettable escape into nature with all the comforts of a high-end resort. Enjoy breathtaking sunsets from the spacious deck and unwind in the serene mountain environment.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
    },
    price: 15000000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Ultra-Luxury Beachfront Villa with Private Island Access",
    description: "Experience the epitome of luxury in this magnificent beachfront villa, complete with its own private stretch of pristine beach and exclusive access to a secluded island. This architectural marvel boasts infinity pools, personal chef services, a private yacht, and breathtaking ocean vistas from every room. Indulge in unparalleled privacy and opulence, perfect for discerning travelers seeking the ultimate tropical getaway.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    },
    price: 30000000,
    location: "Maldives",
    country: "Maldives"
  },

  {
    title: "Downtown Loft",
    description: "Experience urban living at its finest in this modern and stylish loft, located in the vibrant heart of the city. Featuring high ceilings, industrial-chic design, and panoramic city views, it offers convenient access to top restaurants, entertainment, and cultural attractions. Ideal for business travelers or city explorers.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 1200000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Countryside Cottage",
    description: "Discover tranquility in this quaint and charming countryside cottage, nestled amidst lush greenery and rolling hills. Perfect for a romantic getaway or a peaceful family vacation, it offers a rustic yet comfortable ambiance with modern amenities. Explore scenic walking trails and enjoy the serene beauty of nature.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    },
    price: 850000,
    location: "Cotswolds",
    country: "UK"
  },
  {
    title: "Lakeside Retreat",
    description: "Unwind at this peaceful lakeside retreat, offering stunning views of the shimmering waters and surrounding forests. Ideal for nature lovers and those seeking relaxation, it features comfortable accommodations, a private dock, and opportunities for fishing, kayaking, and swimming. Enjoy breathtaking sunsets over the lake.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    },
    price: 1100000,
    location: "Lake Como",
    country: "Italy"
  },
  {
    title: "Modern Apartment",
    description: "Stay in this brand new, meticulously designed modern apartment, equipped with all the amenities for a comfortable and convenient stay. Located in a vibrant neighborhood, it offers easy access to public transport, local cafes, and cultural hotspots. Perfect for solo travelers or couples seeking a stylish urban base.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 950000,
    location: "Berlin",
    country: "Germany"
  },

  {
    title: "Ski Chalet",
    description: "This charming ski chalet is perfectly situated for winter sports enthusiasts, offering direct access to the slopes. Featuring a cozy fireplace, comfortable bedrooms, and stunning mountain views, it's an ideal base for skiing, snowboarding, and après-ski relaxation. Enjoy the crisp mountain air and snowy landscapes.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519659528534-7fd733d145ac",
    },
    price: 2500000,
    location: "Whistler",
    country: "Canada"
  },


 
  {
    title: "Farm Stay",
    description: "Immerse yourself in the charm of rural life with this delightful farm stay. Participate in daily farm activities, enjoy fresh produce, and connect with nature in a peaceful setting. Perfect for families and those seeking an authentic countryside experience away from the hustle and bustle of the city.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500622944204-b135684e99fd",
    },
    price: 700000,
    location: "Tuscany",
    country: "Italy"
  },

  {
    title: "Art Deco Studio",
    description: "Step into a bygone era with this stylish Art Deco studio, nestled within a beautifully preserved historic building. Featuring elegant period details, modern comforts, and a vibrant neighborhood, it offers a unique blend of old-world charm and contemporary living. Close to cultural attractions and trendy eateries.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1",
    },
    price: 1100000,
    location: "Miami",
    country: "USA"
  },

  {
    title: "Minimalist Studio",
    description: "Embrace simplicity and elegance in this clean and modern minimalist studio. Designed with a focus on functionality and aesthetics, it offers a serene and uncluttered living space. Located in a bustling urban area, it provides a peaceful sanctuary after a day of exploring the city.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505842381624-c6b0579625a5",
    },
    price: 850000,
    location: "Tokyo",
    country: "Japan"
  },

  {
    title: "Rustic Cabin",
    description: "Unplug and reconnect with nature in this authentic rustic cabin, offering a genuine wilderness experience. Surrounded by towering trees and wildlife, it provides a cozy and secluded retreat. Perfect for adventurers and those seeking a simple, peaceful escape from modern life.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    },
    price: 950000,
    location: "Montana",
    country: "USA"
  },

  {
    title: "Island Paradise",
    description: "Escape to your own private island paradise, where pristine beaches, crystal-clear waters, and lush tropical foliage await. This exclusive getaway offers unparalleled privacy, luxurious accommodations, and a range of bespoke services. Perfect for honeymoons, romantic escapes, or ultimate relaxation.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    },
    price: 6000000,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Mediterranean Villa",
    description: "Experience the charm of the Mediterranean in this beautiful villa, offering breathtaking panoramic sea views. With its traditional architecture, sun-drenched terraces, and lush gardens, it's the perfect setting for a relaxing vacation. Enjoy local cuisine and the vibrant culture of the region.",
     Image: {
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 2800000,
    location: "Santorini",
    country: "Greece"
  },

  {
    title: "Historic Townhouse",
    description: "Step into history with this charming historic townhouse, beautifully preserved and offering a glimpse into the past. Featuring original architectural details, elegant interiors, and a prime location in a historic district, it's perfect for those who appreciate heritage and culture.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    price: 1600000,
    location: "Boston",
    country: "USA"
  },

  {
    title: "Forest Cabin",
    description: "Escape to this tranquil forest cabin, completely surrounded by the beauty of nature. Perfect for a peaceful retreat, it offers a cozy interior, fresh air, and opportunities for hiking, birdwatching, and stargazing. Disconnect from the world and immerse yourself in the wilderness.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    },
    price: 1250000,
    location: "Oregon",
    country: "USA"
  },


  {
    title: "Traditional Japanese House",
    description: "Immerse yourself in an authentic Japanese experience by staying in this beautifully preserved traditional house. Featuring tatami mats, sliding shoji doors, and a serene garden, it offers a glimpse into Japan's rich cultural heritage. Located in a historic district, it's close to temples and traditional tea houses.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    price: 1300000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Desert Oasis",
    description: "Discover a unique desert accommodation that promises an unforgettable experience amidst the stunning arid landscape. This secluded oasis offers luxurious tents or eco-friendly cabins, stargazing opportunities, and guided desert excursions. Perfect for adventurers seeking tranquility and a connection with nature.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    },
    price: 1600000,
    location: "Marrakech",
    country: "Morocco"
  },
 
  {
    title: "Historic Castle",
    description: "Step back in time and live like royalty in this magnificent ancient castle, steeped in history and grandeur. With its towering turrets, grand halls, and sprawling grounds, it offers a truly unique and unforgettable stay. Explore the castle's rich past and enjoy a luxurious experience.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
    },
    price: 5000000,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Tropical Bungalow",
    description: "Escape to this serene tropical bungalow, where you can relax and rejuvenate amidst lush greenery and the soothing sounds of nature. Featuring an open-air design, comfortable furnishings, and a private patio, it's the perfect spot to unwind and embrace the island life. Close to pristine beaches and local attractions.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    price: 900000,
    location: "Bali",
    country: "Indonesia"
  },


 
  {
    title: "Mountain View Apartment",
    description: "Wake up to stunning mountain views from every window in this beautifully appointed apartment. Located in a serene mountain setting, it offers a perfect blend of comfort and natural beauty. Ideal for outdoor enthusiasts, with easy access to hiking, biking, and skiing trails. Enjoy the fresh air and breathtaking scenery.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 1250000,
    location: "Denver",
    country: "USA"
  },
  {
    title: "Seaside Cottage",
    description: "Escape to this charming seaside cottage, located just steps from the sandy beach and the soothing sound of waves. With its cozy interiors, coastal decor, and fresh sea breeze, it's the perfect retreat for a relaxing beach vacation. Enjoy morning strolls on the beach and stunning ocean sunsets.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 1400000,
    location: "San Diego",
    country: "USA"
  },

  {
    title: "Vineyard Estate",
    description: "Indulge in a luxurious escape at this magnificent vineyard estate, surrounded by rolling hills of lush grapevines. This opulent property offers exquisite accommodations, private wine tastings, and stunning views of the picturesque landscape. Perfect for wine connoisseurs and those seeking a refined countryside experience.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274",
    },
    price: 4000000,
    location: "Napa Valley",
    country: "USA"
  },

  {
    title: "Urban Loft",
    description: "Discover industrial chic in this stylish urban loft space, featuring exposed brick, high ceilings, and contemporary design. Located in a trendy neighborhood, it offers a vibrant atmosphere with easy access to art galleries, boutiques, and gourmet dining. Ideal for creative individuals and city explorers.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    },
    price: 1800000,
    location: "London",
    country: "UK"
  },

  {
    title: "Mountain Chalet",
    description: "Unwind in this spacious mountain chalet, complete with a cozy fireplace and stunning views of the surrounding peaks. Ideal for family vacations or group getaways, it offers comfortable accommodations, a fully equipped kitchen, and easy access to outdoor activities like hiking and skiing.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519885277449-12eee5564d68",
    },
    price: 2100000,
    location: "Chamonix",
    country: "France"
  },

 
  {
    title: "Country Estate",
    description: "Experience the grandeur of this magnificent country estate, featuring sprawling gardens, elegant interiors, and a serene rural setting. Perfect for large gatherings, weddings, or a luxurious family retreat, it offers a blend of historic charm and modern comforts. Explore the picturesque surroundings.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d",
    },
    price: 4500000,
    location: "Hampshire",
    country: "UK"
  },
  {
    title: "Modern Villa",
    description: "Indulge in contemporary luxury at this architectural masterpiece of a modern villa. With its sleek design, expansive glass walls, and state-of-the-art amenities, it offers a sophisticated living experience. Enjoy panoramic views, a private pool, and seamless indoor-outdoor living.",
     Image: {
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    },
    price: 3800000,
    location: "Los Angeles",
    country: "USA"
  },

  {
    title: "Coastal Cottage",
    description: "Discover serenity in this charming coastal cottage, boasting picturesque ocean views and a refreshing sea breeze. With its cozy interiors, beach-inspired decor, and proximity to the shore, it's an ideal spot for a relaxing getaway. Enjoy morning walks on the beach and stunning sunsets.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 1550000,
    location: "Maine",
    country: "USA"
  },

  {
    title: "Luxury Safari Lodge",
    description: "Experience the ultimate African adventure in this luxury safari lodge, offering unparalleled wildlife viewing opportunities. With spacious tents, gourmet dining, and guided game drives, it provides an authentic yet comfortable safari experience. Watch elephants, lions, and giraffes from your private deck.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    },
    price: 3600000,
    location: "Serengeti",
    country: "Tanzania"
  },
  {
    title: "Arctic Igloo Hotel",
    description: "Sleep under the Northern Lights in this unique arctic igloo hotel, offering a once-in-a-lifetime experience in the pristine wilderness. With heated glass igloos, reindeer encounters, and husky sledding, it's perfect for adventure seekers looking for an extraordinary polar experience.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    },
    price: 2700000,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Private Island Resort",
    description: "Own your piece of paradise on this exclusive private island resort, featuring pristine white sand beaches, crystal-clear lagoons, and luxurious overwater bungalows. With personal butler service, world-class diving, and complete privacy, it's the ultimate escape from civilization.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    },
    price: 8500000,
    location: "Seychelles",
    country: "Seychelles"
  },
  {
    title: "Floating Villa",
    description: "Experience ultimate luxury on the water in this stunning floating villa, offering panoramic ocean views and direct access to pristine coral reefs. With its innovative design, infinity pool, and water sports equipment, it provides an unforgettable aquatic living experience.",
     Image: {
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 4800000,
    location: "Mauritius",
    country: "Mauritius"
  },
  {
    title: "Cliffside Villa",
    description: "Perched dramatically on a cliff overlooking the azure Mediterranean Sea, this architectural marvel offers breathtaking panoramic views and luxurious amenities. With its infinity pool seemingly merging with the horizon and private beach access, it's perfect for those seeking spectacular scenery.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    },
    price: 4200000,
    location: "Mykonos",
    country: "Greece"
  },
  {
    title: "Rainforest Treehouse",
    description: "Immerse yourself in the heart of the Amazon rainforest in this eco-luxury treehouse, offering an unparalleled connection with nature. With its sustainable design, guided jungle excursions, and exotic wildlife viewing, it provides an educational and adventurous experience.",
     Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 1750000,
    location: "Amazon Basin",
    country: "Brazil"
  },

];

module.exports = {data: SampleListings };