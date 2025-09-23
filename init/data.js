const SampleListings = [
  {    title: "Grand Mountain Estate with Panoramic Views",
    description: "An expansive and luxurious mountain estate offering unparalleled panoramic views of the surrounding peaks and valleys. This secluded retreat features multiple bedrooms, gourmet kitchen, private spa, and direct access to hiking and skiing trails. Perfect for large families or groups seeking an unforgettable escape into nature with all the comforts of a high-end resort. Enjoy breathtaking sunsets from the spacious deck and unwind in the serene mountain environment.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 15000000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Ultra-Luxury Beachfront Villa with Private Island Access",
    description: "Experience the epitome of luxury in this magnificent beachfront villa, complete with its own private stretch of pristine beach and exclusive access to a secluded island. This architectural marvel boasts infinity pools, personal chef services, a private yacht, and breathtaking ocean vistas from every room. Indulge in unparalleled privacy and opulence, perfect for discerning travelers seeking the ultimate tropical getaway.",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 30000000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Sophisticated Downtown Penthouse Loft with City Skyline Views",
    description: "A chic and sophisticated penthouse loft situated in the vibrant heart of the city, offering stunning 360-degree views of the iconic skyline. This modern residence features floor-to-ceiling windows, state-of-the-art smart home technology, a designer kitchen, and luxurious amenities. Ideal for urban explorers and business travelers who appreciate contemporary design and convenient access to the city's finest dining, entertainment, and cultural attractions.",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 12000000,
    location: "New York",
    
    title: "Cozy Mountain Cabin",
    description: "Escape to this beautiful and cozy mountain cabin, offering stunning panoramic views of the surrounding peaks. Perfect for a peaceful retreat, it features a warm fireplace, comfortable furnishings, and direct access to hiking trails. Enjoy the tranquility of nature and breathtaking sunsets from your private deck.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 1500000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Beachfront Villa",
    description: "Indulge in the ultimate luxury at this exquisite beachfront villa, boasting private access to a pristine sandy beach. With spacious interiors, an infinity pool, and breathtaking ocean views, it's the perfect escape for those seeking serenity and opulence. Enjoy world-class amenities and personalized service.",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3000000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Downtown Loft",
    description: "Experience urban living at its finest in this modern and stylish loft, located in the vibrant heart of the city. Featuring high ceilings, industrial-chic design, and panoramic city views, it offers convenient access to top restaurants, entertainment, and cultural attractions. Ideal for business travelers or city explorers.",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 1200000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Countryside Cottage",
    description: "Discover tranquility in this quaint and charming countryside cottage, nestled amidst lush greenery and rolling hills. Perfect for a romantic getaway or a peaceful family vacation, it offers a rustic yet comfortable ambiance with modern amenities. Explore scenic walking trails and enjoy the serene beauty of nature.",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 850000,
    location: "Cotswolds",
    country: "UK"
  },
  {
    title: "Lakeside Retreat",
    description: "Unwind at this peaceful lakeside retreat, offering stunning views of the shimmering waters and surrounding forests. Ideal for nature lovers and those seeking relaxation, it features comfortable accommodations, a private dock, and opportunities for fishing, kayaking, and swimming. Enjoy breathtaking sunsets over the lake.",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 1100000,
    location: "Lake Como",
    country: "Italy"
  },
  {
    title: "Modern Apartment",
    description: "Stay in this brand new, meticulously designed modern apartment, equipped with all the amenities for a comfortable and convenient stay. Located in a vibrant neighborhood, it offers easy access to public transport, local cafes, and cultural hotspots. Perfect for solo travelers or couples seeking a stylish urban base.",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 950000,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Traditional Japanese House",
    description: "Immerse yourself in an authentic Japanese experience by staying in this beautifully preserved traditional house. Featuring tatami mats, sliding shoji doors, and a serene garden, it offers a glimpse into Japan's rich cultural heritage. Located in a historic district, it's close to temples and traditional tea houses.",
    Image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    price: 1300000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Desert Oasis",
    description: "Discover a unique desert accommodation that promises an unforgettable experience amidst the stunning arid landscape. This secluded oasis offers luxurious tents or eco-friendly cabins, stargazing opportunities, and guided desert excursions. Perfect for adventurers seeking tranquility and a connection with nature.",
    Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    price: 1600000,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Treehouse Adventure",
    description: "Embark on a magical treehouse adventure, where you can stay comfortably nestled among the treetops. This unique and eco-friendly accommodation offers breathtaking forest views, a sense of childlike wonder, and a peaceful escape from the everyday. Perfect for nature lovers and those seeking an extraordinary experience.",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 2000000,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Ski Chalet",
    description: "This charming ski chalet is perfectly situated for winter sports enthusiasts, offering direct access to the slopes. Featuring a cozy fireplace, comfortable bedrooms, and stunning mountain views, it's an ideal base for skiing, snowboarding, and après-ski relaxation. Enjoy the crisp mountain air and snowy landscapes.",
    Image: "https://images.unsplash.com/photo-1519659528534-7fd733d145ac",
    price: 2500000,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Historic Castle",
    description: "Step back in time and live like royalty in this magnificent ancient castle, steeped in history and grandeur. With its towering turrets, grand halls, and sprawling grounds, it offers a truly unique and unforgettable stay. Explore the castle's rich past and enjoy a luxurious experience.",
    Image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
    price: 5000000,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Tropical Bungalow",
    description: "Escape to this serene tropical bungalow, where you can relax and rejuvenate amidst lush greenery and the soothing sounds of nature. Featuring an open-air design, comfortable furnishings, and a private patio, it's the perfect spot to unwind and embrace the island life. Close to pristine beaches and local attractions.",
    Image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    price: 900000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "City Penthouse",
    description: "Indulge in unparalleled luxury at this exquisite city penthouse, offering breathtaking panoramic views of the vibrant cityscape. With its sophisticated design, state-of-the-art amenities, and spacious living areas, it's the ultimate urban escape. Enjoy exclusive access to a private terrace and personalized concierge services.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 3500000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Farm Stay",
    description: "Immerse yourself in the charm of rural life with this delightful farm stay. Participate in daily farm activities, enjoy fresh produce, and connect with nature in a peaceful setting. Perfect for families and those seeking an authentic countryside experience away from the hustle and bustle of the city.",
    Image: "https://images.unsplash.com/photo-1500622944204-b135684e99fd",
    price: 700000,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Houseboat",
    description: "Experience a unique floating accommodation on this charming houseboat, offering a tranquil and picturesque stay on the water. Enjoy the gentle sway of the boat, stunning waterfront views, and the convenience of being close to city attractions. Perfect for a romantic getaway or a memorable family adventure.",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 1800000,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Mountain View Apartment",
    description: "Wake up to stunning mountain views from every window in this beautifully appointed apartment. Located in a serene mountain setting, it offers a perfect blend of comfort and natural beauty. Ideal for outdoor enthusiasts, with easy access to hiking, biking, and skiing trails. Enjoy the fresh air and breathtaking scenery.",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 1250000,
    location: "Denver",
    country: "USA"
  },
  {
    title: "Seaside Cottage",
    description: "Escape to this charming seaside cottage, located just steps from the sandy beach and the soothing sound of waves. With its cozy interiors, coastal decor, and fresh sea breeze, it's the perfect retreat for a relaxing beach vacation. Enjoy morning strolls on the beach and stunning ocean sunsets.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1400000,
    location: "San Diego",
    country: "USA"
  },
  {
    title: "Art Deco Studio",
    description: "Step into a bygone era with this stylish Art Deco studio, nestled within a beautifully preserved historic building. Featuring elegant period details, modern comforts, and a vibrant neighborhood, it offers a unique blend of old-world charm and contemporary living. Close to cultural attractions and trendy eateries.",
    Image: "https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1",
    price: 1100000,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Alpine Lodge",
    description: "Experience the ultimate alpine getaway in this cozy lodge, nestled amidst the majestic Swiss Alps. With its rustic charm, warm fireplace, and breathtaking mountain vistas, it's perfect for winter sports and summer hiking. Enjoy traditional Swiss hospitality and stunning natural beauty.",
    Image: "https://images.unsplash.com/photo-1519885277449-12eee5564d68",
    price: 2200000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Minimalist Studio",
    description: "Embrace simplicity and elegance in this clean and modern minimalist studio. Designed with a focus on functionality and aesthetics, it offers a serene and uncluttered living space. Located in a bustling urban area, it provides a peaceful sanctuary after a day of exploring the city.",
    Image: "https://images.unsplash.com/photo-1505842381624-c6b0579625a5",
    price: 850000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Vineyard Estate",
    description: "Indulge in a luxurious escape at this magnificent vineyard estate, surrounded by rolling hills of lush grapevines. This opulent property offers exquisite accommodations, private wine tastings, and stunning views of the picturesque landscape. Perfect for wine connoisseurs and those seeking a refined countryside experience.",
    Image: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274",
    price: 4000000,
    location: "Napa Valley",
    country: "USA"
  },
  {
    title: "Rustic Cabin",
    description: "Unplug and reconnect with nature in this authentic rustic cabin, offering a genuine wilderness experience. Surrounded by towering trees and wildlife, it provides a cozy and secluded retreat. Perfect for adventurers and those seeking a simple, peaceful escape from modern life.",
    Image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    price: 950000,
    location: "Montana",
    country: "USA"
  },
  {
    title: "Urban Loft",
    description: "Discover industrial chic in this stylish urban loft space, featuring exposed brick, high ceilings, and contemporary design. Located in a trendy neighborhood, it offers a vibrant atmosphere with easy access to art galleries, boutiques, and gourmet dining. Ideal for creative individuals and city explorers.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 1800000,
    location: "London",
    country: "UK"
  },
  {
    title: "Island Paradise",
    description: "Escape to your own private island paradise, where pristine beaches, crystal-clear waters, and lush tropical foliage await. This exclusive getaway offers unparalleled privacy, luxurious accommodations, and a range of bespoke services. Perfect for honeymoons, romantic escapes, or ultimate relaxation.",
    Image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    price: 6000000,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Mediterranean Villa",
    description: "Experience the charm of the Mediterranean in this beautiful villa, offering breathtaking panoramic sea views. With its traditional architecture, sun-drenched terraces, and lush gardens, it's the perfect setting for a relaxing vacation. Enjoy local cuisine and the vibrant culture of the region.",
    Image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 2800000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Modern Treehouse",
    description: "Experience a unique blend of nature and contemporary design in this modern treehouse. Perched high among the trees, it offers stunning forest views, innovative architecture, and all the comforts of a luxury retreat. Perfect for an adventurous yet comfortable escape.",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 1900000,
    location: "Portland",
    country: "USA"
  },
  {
    title: "Historic Townhouse",
    description: "Step into history with this charming historic townhouse, beautifully preserved and offering a glimpse into the past. Featuring original architectural details, elegant interiors, and a prime location in a historic district, it's perfect for those who appreciate heritage and culture.",
    Image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 1600000,
    location: "Boston",
    country: "USA"
  },
  {
    title: "Mountain Chalet",
    description: "Unwind in this spacious mountain chalet, complete with a cozy fireplace and stunning views of the surrounding peaks. Ideal for family vacations or group getaways, it offers comfortable accommodations, a fully equipped kitchen, and easy access to outdoor activities like hiking and skiing.",
    Image: "https://images.unsplash.com/photo-1519885277449-12eee5564d68",
    price: 2100000,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Beach Bungalow",
    description: "Enjoy a simple and charming beach accommodation in this delightful bungalow, just a short stroll from the sandy shores. With its relaxed atmosphere, comfortable interiors, and proximity to the ocean, it's perfect for a laid-back beach vacation. Experience the local culture and fresh seafood.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1200000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "City Center Apartment",
    description: "Stay in this conveniently located city center apartment, offering easy access to all major attractions, shopping districts, and public transportation. With its modern amenities and comfortable living spaces, it's ideal for business travelers or tourists looking to explore the urban landscape.",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 1300000,
    location: "Chicago",
    country: "USA"
  },
  {
    title: "Country Estate",
    description: "Experience the grandeur of this magnificent country estate, featuring sprawling gardens, elegant interiors, and a serene rural setting. Perfect for large gatherings, weddings, or a luxurious family retreat, it offers a blend of historic charm and modern comforts. Explore the picturesque surroundings.",
    Image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d",
    price: 4500000,
    location: "Hampshire",
    country: "UK"
  },
  {
    title: "Modern Villa",
    description: "Indulge in contemporary luxury at this architectural masterpiece of a modern villa. With its sleek design, expansive glass walls, and state-of-the-art amenities, it offers a sophisticated living experience. Enjoy panoramic views, a private pool, and seamless indoor-outdoor living.",
    Image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 3800000,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Traditional Farmhouse",
    description: "Step into an authentic rural experience with this charming traditional farmhouse. Surrounded by picturesque landscapes and offering a glimpse into local life, it provides a peaceful and rustic retreat. Enjoy homemade meals, fresh air, and the tranquility of the countryside.",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 1100000,
    location: "Provence",
    country: "France"
  },
  {
    title: "Lakeside Cabin",
    description: "This charming lakeside cabin offers perfect access for fishing and boating enthusiasts. Nestled by the serene waters, it provides a peaceful escape with stunning views. Enjoy cozy evenings by the fire, explore the lake, and create unforgettable memories in nature.",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 1400000,
    location: "Minnesota",
    country: "USA"
  },
  {
    title: "Urban Studio",
    description: "Experience compact and efficient city living in this stylish urban studio. Designed for comfort and convenience, it offers all the essentials for a short or long-term stay. Located in a bustling district, it provides easy access to public transport, dining, and entertainment options.",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 1000000,
    location: "Toronto",
    country: "Canada"
  },
  {
    title: "Mountain Retreat",
    description: "Escape to this secluded mountain retreat, offering unparalleled tranquility and breathtaking natural beauty. Nestled amidst towering peaks and lush forests, it's the perfect sanctuary for relaxation and outdoor adventures. Enjoy hiking, wildlife viewing, and stargazing in this pristine environment.",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 1700000,
    location: "Colorado",
    country: "USA"
  },
  {
    title: "Coastal Cottage",
    description: "Discover serenity in this charming coastal cottage, boasting picturesque ocean views and a refreshing sea breeze. With its cozy interiors, beach-inspired decor, and proximity to the shore, it's an ideal spot for a relaxing getaway. Enjoy morning walks on the beach and stunning sunsets.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1550000,
    location: "Maine",
    country: "USA"
  },
  {
    title: "Modern Condo",
    description: "Stay in this brand new, modern condo featuring state-of-the-art amenities and contemporary design. Located in a vibrant urban area, it offers convenience, comfort, and easy access to local attractions. Perfect for business travelers or those seeking a stylish city base.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 1450000,
    location: "Seattle",
    country: "USA"
  },
  {
    title: "Traditional Villa",
    description: "Experience timeless elegance in this traditional villa, showcasing classic Mediterranean style with its charming architecture and sun-drenched terraces. Surrounded by lush gardens and offering stunning views, it's the perfect retreat for a relaxing and culturally rich vacation.",
    Image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 2300000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Forest Cabin",
    description: "Escape to this tranquil forest cabin, completely surrounded by the beauty of nature. Perfect for a peaceful retreat, it offers a cozy interior, fresh air, and opportunities for hiking, birdwatching, and stargazing. Disconnect from the world and immerse yourself in the wilderness.",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 1250000,
    location: "Oregon",
    country: "USA"
  },
  {
    title: "Beach House",
    description: "Enjoy the ultimate beach vacation in this charming beach house, offering direct access to the sandy shores. With its relaxed atmosphere, ocean views, and proximity to the water, it's perfect for sunbathing, swimming, and enjoying the coastal lifestyle. Create unforgettable memories by the sea.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 2900000,
    location: "Miami Beach",
    country: "USA"
  },
  {
    title: "Mountain Cabin",
    description: "Escape to this cozy and romantic mountain cabin, nestled amidst picturesque landscapes. Perfect for couples seeking a secluded getaway, it features a warm fireplace, comfortable amenities, and stunning views. Enjoy hiking, stargazing, and intimate moments in this serene setting.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 1350000,
    location: "Utah",
    country: "USA"
  },
  {
    title: "City View Apartment",
    description: "Experience the vibrant energy of the city from this apartment, offering spectacular city skyline views. With its modern design, comfortable amenities, and prime location, it's perfect for urban explorers and business travelers. Enjoy the bustling atmosphere and dazzling night lights.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 1950000,
    location: "Hong Kong",
    country: "China"
  },
  {
    title: "Country Cottage",
    description: "Find your peaceful rural escape in this charming country cottage, surrounded by rolling green fields and tranquil landscapes. With its cozy interiors, traditional charm, and fresh country air, it's the perfect place to unwind and reconnect with nature. Explore local villages and scenic routes.",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 1050000,
    location: "Ireland",
    country: "Ireland"
  },
  {
    title: "Modern Beach House",
    description: "Indulge in contemporary design by the sea at this stunning modern beach house. Featuring sleek architecture, expansive windows, and direct beach access, it offers a luxurious coastal living experience. Enjoy breathtaking ocean views, private terraces, and the soothing sound of waves.",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3200000,
    location: "Malibu",
    country: "USA"
  },
  {
    title: "Alpine Apartment",
    description: "Enjoy the ultimate convenience with ski-in/ski-out access from this modern alpine apartment. Located directly on the slopes, it offers stunning mountain views, comfortable amenities, and easy access to winter sports. Perfect for ski enthusiasts and families seeking an active holiday.",
    Image: "https://images.unsplash.com/photo-1519659528534-7fd733d145ac",
    price: 2400000,
    location: "Austria",
    country: "Austria"
  },
    {
    title: "Grand Mountain Estate with Panoramic Views",
    description: "An expansive and luxurious mountain estate offering unparalleled panoramic views of the surrounding peaks and valleys. This secluded retreat features multiple bedrooms, gourmet kitchen, private spa, and direct access to hiking and skiing trails. Perfect for large families or groups seeking an unforgettable escape into nature with all the comforts of a high-end resort. Enjoy breathtaking sunsets from the spacious deck and unwind in the serene mountain environment.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 15000000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Ultra-Luxury Beachfront Villa with Private Island Access",
    description: "Experience the epitome of luxury in this magnificent beachfront villa, complete with its own private stretch of pristine beach and exclusive access to a secluded island. This architectural marvel boasts infinity pools, personal chef services, a private yacht, and breathtaking ocean vistas from every room. Indulge in unparalleled privacy and opulence, perfect for discerning travelers seeking the ultimate tropical getaway.",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 30000000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Sophisticated Downtown Penthouse Loft with City Skyline Views",
    description: "A chic and sophisticated penthouse loft situated in the vibrant heart of the city, offering stunning 360-degree views of the iconic skyline. This modern residence features floor-to-ceiling windows, state-of-the-art smart home technology, a designer kitchen, and luxurious amenities. Ideal for urban explorers and business travelers who appreciate contemporary design and convenient access to the city's finest dining, entertainment, and cultural attractions.",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 12000000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Cozy Mountain Cabin",
    description: "Escape to this beautiful and cozy mountain cabin, offering stunning panoramic views of the surrounding peaks. Perfect for a peaceful retreat, it features a warm fireplace, comfortable furnishings, and direct access to hiking trails. Enjoy the tranquility of nature and breathtaking sunsets from your private deck.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 1500000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Beachfront Villa",
    description: "Indulge in the ultimate luxury at this exquisite beachfront villa, boasting private access to a pristine sandy beach. With spacious interiors, an infinity pool, and breathtaking ocean views, it's the perfect escape for those seeking serenity and opulence. Enjoy world-class amenities and personalized service.",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3000000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Downtown Loft",
    description: "Experience urban living at its finest in this modern and stylish loft, located in the vibrant heart of the city. Featuring high ceilings, industrial-chic design, and panoramic city views, it offers convenient access to top restaurants, entertainment, and cultural attractions. Ideal for business travelers or city explorers.",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 1200000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Countryside Cottage",
    description: "Discover tranquility in this quaint and charming countryside cottage, nestled amidst lush greenery and rolling hills. Perfect for a romantic getaway or a peaceful family vacation, it offers a rustic yet comfortable ambiance with modern amenities. Explore scenic walking trails and enjoy the serene beauty of nature.",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 850000,
    location: "Cotswolds",
    country: "UK"
  },
  {
    title: "Lakeside Retreat",
    description: "Unwind at this peaceful lakeside retreat, offering stunning views of the shimmering waters and surrounding forests. Ideal for nature lovers and those seeking relaxation, it features comfortable accommodations, a private dock, and opportunities for fishing, kayaking, and swimming. Enjoy breathtaking sunsets over the lake.",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 1100000,
    location: "Lake Como",
    country: "Italy"
  },
  {
    title: "Modern Apartment",
    description: "Stay in this brand new, meticulously designed modern apartment, equipped with all the amenities for a comfortable and convenient stay. Located in a vibrant neighborhood, it offers easy access to public transport, local cafes, and cultural hotspots. Perfect for solo travelers or couples seeking a stylish urban base.",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 950000,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Traditional Japanese House",
    description: "Immerse yourself in an authentic Japanese experience by staying in this beautifully preserved traditional house. Featuring tatami mats, sliding shoji doors, and a serene garden, it offers a glimpse into Japan's rich cultural heritage. Located in a historic district, it's close to temples and traditional tea houses.",
    Image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    price: 1300000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Desert Oasis",
    description: "Discover a unique desert accommodation that promises an unforgettable experience amidst the stunning arid landscape. This secluded oasis offers luxurious tents or eco-friendly cabins, stargazing opportunities, and guided desert excursions. Perfect for adventurers seeking tranquility and a connection with nature.",
    Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    price: 1600000,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Treehouse Adventure",
    description: "Embark on a magical treehouse adventure, where you can stay comfortably nestled among the treetops. This unique and eco-friendly accommodation offers breathtaking forest views, a sense of childlike wonder, and a peaceful escape from the everyday. Perfect for nature lovers and those seeking an extraordinary experience.",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 2000000,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Ski Chalet",
    description: "This charming ski chalet is perfectly situated for winter sports enthusiasts, offering direct access to the slopes. Featuring a cozy fireplace, comfortable bedrooms, and stunning mountain views, it's an ideal base for skiing, snowboarding, and après-ski relaxation. Enjoy the crisp mountain air and snowy landscapes.",
    Image: "https://images.unsplash.com/photo-1519659528534-7fd733d145ac",
    price: 2500000,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Historic Castle",
    description: "Step back in time and live like royalty in this magnificent ancient castle, steeped in history and grandeur. With its towering turrets, grand halls, and sprawling grounds, it offers a truly unique and unforgettable stay. Explore the castle's rich past and enjoy a luxurious experience.",
    Image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
    price: 5000000,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Tropical Bungalow",
    description: "Escape to this serene tropical bungalow, where you can relax and rejuvenate amidst lush greenery and the soothing sounds of nature. Featuring an open-air design, comfortable furnishings, and a private patio, it's the perfect spot to unwind and embrace the island life. Close to pristine beaches and local attractions.",
    Image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    price: 900000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "City Penthouse",
    description: "Indulge in unparalleled luxury at this exquisite city penthouse, offering breathtaking panoramic views of the vibrant cityscape. With its sophisticated design, state-of-the-art amenities, and spacious living areas, it's the ultimate urban escape. Enjoy exclusive access to a private terrace and personalized concierge services.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 3500000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Farm Stay",
    description: "Immerse yourself in the charm of rural life with this delightful farm stay. Participate in daily farm activities, enjoy fresh produce, and connect with nature in a peaceful setting. Perfect for families and those seeking an authentic countryside experience away from the hustle and bustle of the city.",
    Image: "https://images.unsplash.com/photo-1500622944204-b135684e99fd",
    price: 700000,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Houseboat",
    description: "Experience a unique floating accommodation on this charming houseboat, offering a tranquil and picturesque stay on the water. Enjoy the gentle sway of the boat, stunning waterfront views, and the convenience of being close to city attractions. Perfect for a romantic getaway or a memorable family adventure.",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 1800000,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Mountain View Apartment",
    description: "Wake up to stunning mountain views from every window in this beautifully appointed apartment. Located in a serene mountain setting, it offers a perfect blend of comfort and natural beauty. Ideal for outdoor enthusiasts, with easy access to hiking, biking, and skiing trails. Enjoy the fresh air and breathtaking scenery.",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 1250000,
    location: "Denver",
    country: "USA"
  },
  {
    title: "Seaside Cottage",
    description: "Escape to this charming seaside cottage, located just steps from the sandy beach and the soothing sound of waves. With its cozy interiors, coastal decor, and fresh sea breeze, it's the perfect retreat for a relaxing beach vacation. Enjoy morning strolls on the beach and stunning ocean sunsets.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1400000,
    location: "San Diego",
    country: "USA"
  },
  {
    title: "Art Deco Studio",
    description: "Step into a bygone era with this stylish Art Deco studio, nestled within a beautifully preserved historic building. Featuring elegant period details, modern comforts, and a vibrant neighborhood, it offers a unique blend of old-world charm and contemporary living. Close to cultural attractions and trendy eateries.",
    Image: "https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1",
    price: 1100000,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Alpine Lodge",
    description: "Experience the ultimate alpine getaway in this cozy lodge, nestled amidst the majestic Swiss Alps. With its rustic charm, warm fireplace, and breathtaking mountain vistas, it's perfect for winter sports and summer hiking. Enjoy traditional Swiss hospitality and stunning natural beauty.",
    Image: "https://images.unsplash.com/photo-1519885277449-12eee5564d68",
    price: 2200000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Minimalist Studio",
    description: "Embrace simplicity and elegance in this clean and modern minimalist studio. Designed with a focus on functionality and aesthetics, it offers a serene and uncluttered living space. Located in a bustling urban area, it provides a peaceful sanctuary after a day of exploring the city.",
    Image: "https://images.unsplash.com/photo-1505842381624-c6b0579625a5",
    price: 850000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Vineyard Estate",
    description: "Indulge in a luxurious escape at this magnificent vineyard estate, surrounded by rolling hills of lush grapevines. This opulent property offers exquisite accommodations, private wine tastings, and stunning views of the picturesque landscape. Perfect for wine connoisseurs and those seeking a refined countryside experience.",
    Image: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274",
    price: 4000000,
    location: "Napa Valley",
    country: "USA"
  },
  {
    title: "Rustic Cabin",
    description: "Unplug and reconnect with nature in this authentic rustic cabin, offering a genuine wilderness experience. Surrounded by towering trees and wildlife, it provides a cozy and secluded retreat. Perfect for adventurers and those seeking a simple, peaceful escape from modern life.",
    Image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    price: 950000,
    location: "Montana",
    country: "USA"
  },
  {
    title: "Urban Loft",
    description: "Discover industrial chic in this stylish urban loft space, featuring exposed brick, high ceilings, and contemporary design. Located in a trendy neighborhood, it offers a vibrant atmosphere with easy access to art galleries, boutiques, and gourmet dining. Ideal for creative individuals and city explorers.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 1800000,
    location: "London",
    country: "UK"
  },
  {
    title: "Island Paradise",
    description: "Escape to your own private island paradise, where pristine beaches, crystal-clear waters, and lush tropical foliage await. This exclusive getaway offers unparalleled privacy, luxurious accommodations, and a range of bespoke services. Perfect for honeymoons, romantic escapes, or ultimate relaxation.",
    Image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    price: 6000000,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Mediterranean Villa",
    description: "Experience the charm of the Mediterranean in this beautiful villa, offering breathtaking panoramic sea views. With its traditional architecture, sun-drenched terraces, and lush gardens, it's the perfect setting for a relaxing vacation. Enjoy local cuisine and the vibrant culture of the region.",
    Image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 2800000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Modern Treehouse",
    description: "Experience a unique blend of nature and contemporary design in this modern treehouse. Perched high among the trees, it offers stunning forest views, innovative architecture, and all the comforts of a luxury retreat. Perfect for an adventurous yet comfortable escape.",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 1900000,
    location: "Portland",
    country: "USA"
  },
  {
    title: "Historic Townhouse",
    description: "Step into history with this charming historic townhouse, beautifully preserved and offering a glimpse into the past. Featuring original architectural details, elegant interiors, and a prime location in a historic district, it's perfect for those who appreciate heritage and culture.",
    Image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 1600000,
    location: "Boston",
    country: "USA"
  },
  {
    title: "Mountain Chalet",
    description: "Unwind in this spacious mountain chalet, complete with a cozy fireplace and stunning views of the surrounding peaks. Ideal for family vacations or group getaways, it offers comfortable accommodations, a fully equipped kitchen, and easy access to outdoor activities like hiking and skiing.",
    Image: "https://images.unsplash.com/photo-1519885277449-12eee5564d68",
    price: 2100000,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Beach Bungalow",
    description: "Enjoy a simple and charming beach accommodation in this delightful bungalow, just a short stroll from the sandy shores. With its relaxed atmosphere, comfortable interiors, and proximity to the ocean, it's perfect for a laid-back beach vacation. Experience the local culture and fresh seafood.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1200000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "City Center Apartment",
    description: "Stay in this conveniently located city center apartment, offering easy access to all major attractions, shopping districts, and public transportation. With its modern amenities and comfortable living spaces, it's ideal for business travelers or tourists looking to explore the urban landscape.",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 1300000,
    location: "Chicago",
    country: "USA"
  },
  {
    title: "Country Estate",
    description: "Experience the grandeur of this magnificent country estate, featuring sprawling gardens, elegant interiors, and a serene rural setting. Perfect for large gatherings, weddings, or a luxurious family retreat, it offers a blend of historic charm and modern comforts. Explore the picturesque surroundings.",
    Image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d",
    price: 4500000,
    location: "Hampshire",
    country: "UK"
  },
  {
    title: "Modern Villa",
    description: "Indulge in contemporary luxury at this architectural masterpiece of a modern villa. With its sleek design, expansive glass walls, and state-of-the-art amenities, it offers a sophisticated living experience. Enjoy panoramic views, a private pool, and seamless indoor-outdoor living.",
    Image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 3800000,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Traditional Farmhouse",
    description: "Step into an authentic rural experience with this charming traditional farmhouse. Surrounded by picturesque landscapes and offering a glimpse into local life, it provides a peaceful and rustic retreat. Enjoy homemade meals, fresh air, and the tranquility of the countryside.",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 1100000,
    location: "Provence",
    country: "France"
  },
  {
    title: "Lakeside Cabin",
    description: "This charming lakeside cabin offers perfect access for fishing and boating enthusiasts. Nestled by the serene waters, it provides a peaceful escape with stunning views. Enjoy cozy evenings by the fire, explore the lake, and create unforgettable memories in nature.",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 1400000,
    location: "Minnesota",
    country: "USA"
  },
  {
    title: "Urban Studio",
    description: "Experience compact and efficient city living in this stylish urban studio. Designed for comfort and convenience, it offers all the essentials for a short or long-term stay. Located in a bustling district, it provides easy access to public transport, dining, and entertainment options.",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 1000000,
    location: "Toronto",
    country: "Canada"
  },
  {
    title: "Mountain Retreat",
    description: "Escape to this secluded mountain retreat, offering unparalleled tranquility and breathtaking natural beauty. Nestled amidst towering peaks and lush forests, it's the perfect sanctuary for relaxation and outdoor adventures. Enjoy hiking, wildlife viewing, and stargazing in this pristine environment.",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 1700000,
    location: "Colorado",
    country: "USA"
  },
  {
    title: "Coastal Cottage",
    description: "Discover serenity in this charming coastal cottage, boasting picturesque ocean views and a refreshing sea breeze. With its cozy interiors, beach-inspired decor, and proximity to the shore, it's an ideal spot for a relaxing getaway. Enjoy morning walks on the beach and stunning sunsets.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1550000,
    location: "Maine",
    country: "USA"
  },
  {
    title: "Modern Condo",
    description: "Stay in this brand new, modern condo featuring state-of-the-art amenities and contemporary design. Located in a vibrant urban area, it offers convenience, comfort, and easy access to local attractions. Perfect for business travelers or those seeking a stylish city base.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 1450000,
    location: "Seattle",
    country: "USA"
  },
  {
    title: "Traditional Villa",
    description: "Experience timeless elegance in this traditional villa, showcasing classic Mediterranean style with its charming architecture and sun-drenched terraces. Surrounded by lush gardens and offering stunning views, it's the perfect retreat for a relaxing and culturally rich vacation.",
    Image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 2300000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Forest Cabin",
    description: "Escape to this tranquil forest cabin, completely surrounded by the beauty of nature. Perfect for a peaceful retreat, it offers a cozy interior, fresh air, and opportunities for hiking, birdwatching, and stargazing. Disconnect from the world and immerse yourself in the wilderness.",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 1250000,
    location: "Oregon",
    country: "USA"
  },
  {
    title: "Beach House",
    description: "Enjoy the ultimate beach vacation in this charming beach house, offering direct access to the sandy shores. With its relaxed atmosphere, ocean views, and proximity to the water, it's perfect for sunbathing, swimming, and enjoying the coastal lifestyle. Create unforgettable memories by the sea.",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 2900000,
    location: "Miami Beach",
    country: "USA"
  },
  {
    title: "Mountain Cabin",
    description: "Escape to this cozy and romantic mountain cabin, nestled amidst picturesque landscapes. Perfect for couples seeking a secluded getaway, it features a warm fireplace, comfortable amenities, and stunning views. Enjoy hiking, stargazing, and intimate moments in this serene setting.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 1350000,
    location: "Utah",
    country: "USA"
  },
  {
    title: "City View Apartment",
    description: "Experience the vibrant energy of the city from this apartment, offering spectacular city skyline views. With its modern design, comfortable amenities, and prime location, it's perfect for urban explorers and business travelers. Enjoy the bustling atmosphere and dazzling night lights.",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 1950000,
    location: "Hong Kong",
    country: "China"
  },
  {
    title: "Country Cottage",
    description: "Find your peaceful rural escape in this charming country cottage, surrounded by rolling green fields and tranquil landscapes. With its cozy interiors, traditional charm, and fresh country air, it's the perfect place to unwind and reconnect with nature. Explore local villages and scenic routes.",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 1050000,
    location: "Ireland",
    country: "Ireland"
  },
  {
    title: "Modern Beach House",
    description: "Indulge in contemporary design by the sea at this stunning modern beach house. Featuring sleek architecture, expansive windows, and direct beach access, it offers a luxurious coastal living experience. Enjoy breathtaking ocean views, private terraces, and the soothing sound of waves.",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3200000,
    location: "Malibu",
    country: "USA"
  },
  {
    title: "Alpine Apartment",
    description: "Enjoy the ultimate convenience with ski-in/ski-out access from this modern alpine apartment. Located directly on the slopes, it offers stunning mountain views, comfortable amenities, and easy access to winter sports. Perfect for ski enthusiasts and families seeking an active holiday.",
    Image: "https://images.unsplash.com/photo-1519659528534-7fd733d145ac",
    price: 2400000,
    location: "Austria",
    country: "Austria"
  },
  {
    title: "Luxury Safari Lodge",
    description: "Experience the ultimate African adventure in this luxury safari lodge, offering unparalleled wildlife viewing opportunities. With spacious tents, gourmet dining, and guided game drives, it provides an authentic yet comfortable safari experience. Watch elephants, lions, and giraffes from your private deck.",
    Image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: 3600000,
    location: "Serengeti",
    country: "Tanzania"
  },
  {
    title: "Arctic Igloo Hotel",
    description: "Sleep under the Northern Lights in this unique arctic igloo hotel, offering a once-in-a-lifetime experience in the pristine wilderness. With heated glass igloos, reindeer encounters, and husky sledding, it's perfect for adventure seekers looking for an extraordinary polar experience.",
    Image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    price: 2700000,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Private Island Resort",
    description: "Own your piece of paradise on this exclusive private island resort, featuring pristine white sand beaches, crystal-clear lagoons, and luxurious overwater bungalows. With personal butler service, world-class diving, and complete privacy, it's the ultimate escape from civilization.",
    Image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    price: 8500000,
    location: "Seychelles",
    country: "Seychelles"
  },
  {
    title: "Floating Villa",
    description: "Experience ultimate luxury on the water in this stunning floating villa, offering panoramic ocean views and direct access to pristine coral reefs. With its innovative design, infinity pool, and water sports equipment, it provides an unforgettable aquatic living experience.",
    Image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 4800000,
    location: "Mauritius",
    country: "Mauritius"
  },
  {
    title: "Cliffside Villa",
    description: "Perched dramatically on a cliff overlooking the azure Mediterranean Sea, this architectural marvel offers breathtaking panoramic views and luxurious amenities. With its infinity pool seemingly merging with the horizon and private beach access, it's perfect for those seeking spectacular scenery.",
    Image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    price: 4200000,
    location: "Mykonos",
    country: "Greece"
  },
  {
    title: "Rainforest Treehouse",
    description: "Immerse yourself in the heart of the Amazon rainforest in this eco-luxury treehouse, offering an unparalleled connection with nature. With its sustainable design, guided jungle excursions, and exotic wildlife viewing, it provides an educational and adventurous experience.",
    Image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    price: 1750000,
    location: "Amazon Basin",
    country: "Brazil"
  },
  {
    title: "Glass House in the Woods",
    description: "Experience modern minimalism surrounded by pristine forest in this stunning glass house. With floor-to-ceiling windows offering 360-degree nature views, it provides a unique blend of contemporary luxury and natural immersion. Perfect for architecture enthusiasts and nature lovers.",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 2100000,
    location: "Black Forest",
    country: "Germany"
  },
  {
    title: "Historic Home",
    description: "Beautifully preserved historic property",
    Image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 175,
    location: "Charleston",
    country: "USA"
  },
  {
    title: "Lakeside Villa",
    description: "Luxury on the water",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 330,
    location: "Geneva",
    country: "Switzerland"
  },
  {
    title: "Desert Retreat",
    description: "Stunning desert landscapes",
    Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    price: 185,
    location: "Arizona",
    country: "USA"
  },
  {
    title: "Urban Apartment",
    description: "Perfect for city explorers",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 115,
    location: "Paris",
    country: "France"
  },
  {
    title: "Mountain Home",
    description: "Spacious family accommodation",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 260,
    location: "British Columbia",
    country: "Canada"
  },
  {
    title: "Beachfront Condo",
    description: "Oceanfront luxury",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 275,
    location: "Hawaii",
    country: "USA"
  },
  {
    title: "Country Inn",
    description: "Charming bed and breakfast",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 145,
    location: "Vermont",
    country: "USA"
  },
  {
    title: "Modern Loft",
    description: "Industrial design with luxury finishes",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 220,
    location: "San Francisco",
    country: "USA"
  },
  {
    title: "Traditional Cabin",
    description: "Rustic charm and comfort",
    Image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    price: 130,
    location: "Norway",
    country: "Norway"
  },
  {
    title: "City Penthouse",
    description: "Ultimate urban luxury",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 420,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Mountain View Cottage",
    description: "Panoramic mountain views",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 155,
    location: "New Zealand",
    country: "New Zealand"
  },
  {
    title: "Beach Bungalow",
    description: "Relaxed tropical living",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 125,
    location: "Sri Lanka",
    country: "Sri Lanka"
  },
  {
    title: "Modern Apartment",
    description: "Sleek contemporary design",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 135,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "Country House",
    description: "Spacious rural property",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 195,
    location: "Scotland",
    country: "UK"
  },
  {
    title: "Lakeside Retreat",
    description: "Peaceful waterfront escape",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 165,
    location: "Michigan",
    country: "USA"
  },
  {
    title: "Urban Studio",
    description: "Efficient city living",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 105,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Mountain Cabin",
    description: "Cozy winter getaway",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 145,
    location: "Sweden",
    country: "Sweden"
  },
  {
    title: "Beach Villa",
    description: "Luxury beachfront living",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 310,
    location: "Portugal",
    country: "Portugal"
  },
  {
    title: "Modern House",
    description: "Architectural design",
    Image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 280,
    location: "Austin",
    country: "USA"
  },
  {
    title: "Traditional Cottage",
    description: "Charming historic property",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 120,
    location: "Wales",
    country: "UK"
  },
  {
    title: "Lakeside Cabin",
    description: "Fishing and boating paradise",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 150,
    location: "Finland",
    country: "Finland"
  },
  {
    title: "City Apartment",
    description: "Convenient urban location",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 125,
    location: "Madrid",
    country: "Spain"
  },
  {
    title: "Mountain Retreat",
    description: "Secluded nature escape",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 175,
    location: "Chile",
    country: "Chile"
  },
  {
    title: "Beach House",
    description: "Oceanfront luxury",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 295,
    location: "California",
    country: "USA"
  },
  {
    title: "Modern Condo",
    description: "New construction with amenities",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 155,
    location: "Vancouver",
    country: "Canada"
  },
  {
    title: "Traditional Villa",
    description: "Classic European style",
    Image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 245,
    location: "Italy",
    country: "Italy"
  },
  {
    title: "Forest Cabin",
    description: "Nature immersion",
    Image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    price: 135,
    location: "Washington",
    country: "USA"
  },
  {
    title: "Beachfront House",
    description: "Direct beach access",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 305,
    location: "Florida",
    country: "USA"
  },
  {
    title: "Mountain Cabin",
    description: "Romantic getaway",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 140,
    location: "Colorado",
    country: "USA"
  },
  {
    title: "City View Loft",
    description: "Stunning urban panoramas",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 210,
    location: "Shanghai",
    country: "China"
  },
  {
    title: "Country Cottage",
    description: "Peaceful rural retreat",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 110,
    location: "England",
    country: "UK"
  },
  {
    title: "Modern Beach Villa",
    description: "Contemporary coastal design",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 335,
    location: "Mexico",
    country: "Mexico"
  },
  {
    title: "Alpine Chalet",
    description: "Ski resort access",
    Image: "https://images.unsplash.com/photo-1519659528534-7fd733d145ac",
    price: 255,
    location: "France",
    country: "France"
  },
  {
    title: "Historic Mansion",
    description: "Grand historic property",
    Image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 190,
    location: "Virginia",
    country: "USA"
  },
  {
    title: "Lakeside Mansion",
    description: "Waterfront luxury estate",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 350,
    location: "Switzerland",
    country: "Switzerland"
  },
  {
    title: "Desert Oasis",
    description: "Unique desert experience",
    Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    price: 200,
    location: "Nevada",
    country: "USA"
  },
  {
    title: "Urban Apartment",
    description: "Perfect city base",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 120,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Mountain Estate",
    description: "Spacious mountain property",
    Image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 275,
    location: "Montana",
    country: "USA"
  },
  {
    title: "Beachfront Condo",
    description: "Ocean views from every room",
    Image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 290,
    location: "Bahamas",
    country: "Bahamas"
  },
  {
    title: "Country Inn",
    description: "Charming accommodation",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 150,
    location: "New England",
    country: "USA"
  },
  {
    title: "Modern Loft",
    description: "Industrial chic design",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 235,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Traditional Lodge",
    description: "Rustic comfort and charm",
    Image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    price: 145,
    location: "Alaska",
    country: "USA"
  },
  {
    title: "City Penthouse",
    description: "Ultimate urban luxury",
    Image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 440,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Mountain View Retreat",
    description: "Breathtaking mountain scenery",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 165,
    location: "Peru",
    country: "Peru"
  },
  {
    title: "Beach Bungalow",
    description: "Tropical paradise",
    Image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 130,
    location: "Philippines",
    country: "Philippines"
  },
  {
    title: "Modern Apartment",
    description: "Contemporary urban living",
    Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 140,
    location: "Melbourne",
    country: "Australia"
  },
  {
    title: "Country Estate",
    description: "Spacious rural property",
    Image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 210,
    location: "Ireland",
    country: "Ireland"
  },
  {
    title: "Lakeside Cabin",
    description: "Peaceful waterfront escape",
    Image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    price: 170,
    location: "Canada",
    country: "Canada"
  },
  {
    title: "Urban Studio",
    description: "Efficient city accommodation",
    Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 110,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Mountain Getaway",
    description: "Cozy winter retreat",
    Image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    price: 150,
    location: "Austria",
    country: "Austria"
  },

];

module.exports = {data: SampleListings };