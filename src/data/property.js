import property1 from '../assets/images/properties/img1.jpg';
import property2 from '../assets/images/properties/img2.jpg';
import property3 from '../assets/images/properties/img3.jpg';
import property4 from '../assets/images/properties/img4.jpg';
import property5 from '../assets/images/properties/img5.jpg';
import property6 from '../assets/images/properties/img6.jpg';
import video from '../assets/images/video.jpg';
import img1 from '../assets/images/property-details/img1.jpg';
import img2 from '../assets/images/property-details/img2.jpg';
import img3 from '../assets/images/property-details/img3.jpg';
import img4 from '../assets/images/property-details/img4.jpg';
import img5 from '../assets/images/property-details/img5.jpg';
import img6 from '../assets/images/property-details/img6.jpg';
import floor1 from '../assets/images/floor-plans/first.png';
import floor2 from '../assets/images/floor-plans/second.png';
import floor3 from '../assets/images/floor-plans/third.png';
import floor4 from '../assets/images/floor-plans/fourth.png';

export const properties = [
  {
    id: "1",
    name: "Luxury Villa in Garden City",
    category: "appartment",
    price: 8000,
    city: "new york",
    location: "garden city",
    address: "Belmont Gardens",
    type: "single house",
    status: "rent",
    date: "January 26,2023",
    floor: 10,
    space: 1500,
    room: "single room",
    bedRoom: 3,
    feature: "duplex",
    image: property1,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"1,500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,500 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "2",
    name: "Amazing Villa in Daly City",
    category: "villa",
    price: 6600,
    city: "california",
    location: "daly city",
    address: "Belmont Gardens",
    type: "single house",
    status: "sale",
    date: "March 26,2023",
    floor: 10,
    space: 2400,
    room: "single room",
    bedRoom: 3,
    feature: "duplex",
    image: property2,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"2,400 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"2,400 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },
  
  {
    id: "3",
    name: "Master Villa in Alexandria",
    category: "single family",
    price: 4600,
    city: "louisiana",
    location: "alexandria",
    address: "Belmont Gardens",
    type: "single house",
    status: "rent",
    date: "May 26,2023",
    floor: 10,
    space: 3600,
    room: "single room",
    bedRoom: 3,
    feature: "duplex",
    image: property3,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"3,600 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"3,600 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },
  
  {
    id: "4",
    name: "Eco Villa in Northfield",
    category: "house",
    price: 3600,
    city: "minnesota",
    location: "northfield",
    address: "Belmont Gardens",
    type: "single house",
    status: "sale",
    date: "July 26,2023",
    floor: 10,
    space: 6400,
    room: "single room",
    bedRoom: 3,
    feature: "duplex",
    image: property4,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"6,400 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"6,400 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },
  
  {
    id: "5",
    name: "Green Villa in Jersey City",
    category: "office",
    price: 8100,
    city: "new jersey",
    location: "jersey city",
    address: "Belmont Gardens",
    type: "single house",
    status: "rent",
    date: "September 26,2023",
    floor: 10,
    space: 5500,
    room: "single room",
    bedRoom: 3,
    feature: "duplex",
    image: property5,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"5,500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"5,500 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },
  
  {
    id: "6",
    name: "Beautiful House in Ellensburg",
    category: "land",
    price: 7900,
    city: "washington",
    location: "ellensburg",
    address: "Belmont Gardens",
    type: "single house",
    status: "sale",
    date: "November 26,2023",
    floor: 10,
    space: 3200,
    room: "single room",
    bedRoom: 3,
    feature: "duplex",
    image: property6,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"3,200 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"3,200 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "7",
    name: "Green Home in Garden City",
    category: "land",
    price: 6300,
    city: "new york",
    location: "garden city",
    address: "Belmont Gardens",
    type: "town house",
    status: "sale",
    date: "December 26,2023",
    floor: 10,
    space: 6100,
    room: "double room",
    bedRoom: 3,
    feature: "delux",
    image: property5,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"6,100 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"6,100 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "8",
    name: "Eco Garden in Daly City",
    category: "luxury home",
    price: 7600,
    city: "california",
    location: "daly city",
    address: "Belmont Gardens",
    type: "town house",
    status: "rent",
    date: "May 26,2023",
    floor: 10,
    space: 2200,
    room: "double room",
    bedRoom: 3,
    feature: "delux",
    image: property6,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"2,200 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"2,200 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "9",
    name: "Garden Villa in Alexandria",
    category: "appartment",
    price: 7900,
    city: "louisiana",
    location: "alexandria",
    address: "Belmont Gardens",
    type: "town house",
    status: "sale",
    date: "June 26,2023",
    floor: 10,
    space: 1700,
    room: "double room",
    bedRoom: 3,
    feature: "delux",
    image: property4,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"1,700 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,700 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "10",
    name: "luxury Villa in Northfield",
    category: "villa",
    price: 7100,
    city: "minnesota",
    location: "northfield",
    address: "Belmont Gardens",
    type: "town house",
    status: "rent",
    date: "July 01,2023",
    floor: 10,
    space: 1200,
    room: "double room",
    bedRoom: 3,
    feature: "delux",
    image: property3,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"7,600 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"7,600 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "11",
    name: "Chefs table in Jersey City",
    category: "single family",
    price: 4100,
    city: "new jersey",
    location: "jersey city",
    address: "Belmont Gardens",
    type: "town house",
    status: "sale",
    date: "April 13,2022",
    floor: 10,
    space: 2900,
    room: "double room",
    bedRoom: 3,
    feature: "delux",
    image: property2,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"2,400 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"2,400 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "12",
    name: "Premium Villa in Ellensburg",
    category: "house",
    price: 7600,
    city: "washington",
    location: "ellensburg",
    address: "Belmont Gardens",
    type: "town house",
    status: "rent",
    date: "February 26,2023",
    floor: 10,
    space: 1200,
    room: "double room",
    bedRoom: 3,
    feature: "delux",
    image: property1,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"7,600 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"7,600 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "13",
    name: "Decorative Villa in Garden City",
    category: "house",
    price: 5600,
    city: "new york",
    location: "garden city",
    address: "Belmont Gardens",
    type: "multi family house",
    status: "rent",
    date: "April 26,2023",
    floor: 10,
    space: 4000,
    room: "many room",
    bedRoom: 3,
    feature: "adjoining",
    image: property2,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"4,000 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"4,000 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "14",
    name: "Eco Villa in Daly City",
    category: "office",
    price: 9600,
    city: "california",
    location: "daly city",
    address: "Belmont Gardens",
    type: "multi family house",
    status: "sale",
    date: "June 26,2023",
    floor: 10,
    space: 1400,
    room: "many room",
    bedRoom: 3,
    feature: "adjoining",
    image: property1,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"1,400 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,400 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "15",
    name: "Eco Villa in Alexandria",
    category: "land",
    price: 6800,
    city: "louisiana",
    location: "alexandria",
    address: "Belmont Gardens",
    type: "multi family house",
    status: "rent",
    date: "August 26,2023",
    floor: 10,
    space: 5000,
    room: "many room",
    bedRoom: 3,
    feature: "adjoining",
    image: property3,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"5,000 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"5,000 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "16",
    name: "Amazing Home in Northfield",
    category: "luxury home",
    price: 4500,
    city: "minnesota",
    location: "northfield",
    address: "Belmont Gardens",
    type: "multi family house",
    status: "sale",
    date: "October 26,2023",
    floor: 10,
    space: 2800,
    room: "many room",
    bedRoom: 3,
    feature: "adjoining",
    image: property6,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"2,800 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"2,800 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "17",
    name: "Modern Home in Jersey City",
    category: "appartment",
    price: 4100,
    city: "new jersey",
    location: "jersey city",
    address: "Belmont Gardens",
    type: "multi family house",
    status: "rent",
    date: "April 13,2022",
    floor: 10,
    space: 2900,
    room: "many room",
    bedRoom: 3,
    feature: "adjoining",
    image: property5,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"2,400 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"2,400 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },

  {
    id: "18",
    name: "Premium Villa in Ellensburg",
    category: "villa",
    price: 7600,
    city: "washington",
    location: "ellensburg",
    address: "Belmont Gardens",
    type: "multi family house",
    status: "sale",
    date: "February 26,2023",
    floor: 10,
    space: 1200,
    room: "many room",
    bedRoom: 3,
    feature: "adjoining",
    image: property4,
    description: [
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes.",
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
      "Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light. Just steps away from QM2 express bus to Manhattan and local buses; only minutes."
    ],
    video: video,
    rating: 5,
    gallery: [
      img1, img4, img5, img2, img3, img6
    ],
    propertyDetails:[
      {
        id:0,
        label:"Property Id",
        value:160
      },
      {
        id:1,
        label:"Price",
        value:"$ 300 / month"
      },
      {
        id:2,
        label:"Property Size",
        value:"7,600 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"7,600 ft2"
      },
      {
        id:4,
        label:"Rooms",
        value:5
      },
      {
        id:5,
        label:"Bedrooms",
        value:2
      },
      {
        id:6,
        label:"Bathrooms",
        value:4
      },
      {
        id:7,
        label:"Custom ID",
        value:7
      },
      {
        id:8,
        label:"Garages",
        value:1
      },
      {
        id:9,
        label:"Year Built",
        value:1950
      },
      {
        id:10,
        label:"Garage Size",
        value:"2 cars"
      },
      {
        id:11,
        label:"Available from",
        value:"2015-09-24"
      },
      {
        id:12,
        label:"Basement",
        value:"Full"
      },
      {
        id:13,
        label:"Extra Details",
        value:"Pool"
      },
      {
        id:14,
        label:"Roofing",
        value:"New"
      },
      {
        id:15,
        label:"Exterior Material",
        value:"Brick"
      },
      {
        id:16,
        label:"Structure Type",
        value:"Brick"
      },
      {
        id:17,
        label:"Floors No",
        value:1
      },
      
    ],
    floorPlans: [
      {
        name: "first",
        floor: "First Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor1
      },
      {
        name: "second",
        floor: "Second Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor2
      },
      {
        name: "third",
        floor: "Third Floor",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor3
      },
      {
        name: "top",
        floor: "Top Garden",
        details: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage.",
        image: floor4
      }
    ]
  },
]