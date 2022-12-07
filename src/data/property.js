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
    price: 8600,
    city: "New York",
    location: "Garden City",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Rent",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Single",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Premium Villa in Jamestown",
    category: "land",
    price: 7600,
    city: "New York",
    location: "Jamestown",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Sale",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Amazing Villa in Daly City",
    category: "house",
    price: 6600,
    city: "California",
    location: "Daly City",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Rent",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Decorative Villa in Oakland",
    category: "villa",
    price: 5600,
    city: "California",
    location: "Oakland",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Sale",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Master Villa in Alexandria",
    category: "luxuary home",
    price: 4600,
    city: "Louisiana",
    location: "Alexandria",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Rent",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Eco Villa in New Orleans",
    category: "office",
    price: 9600,
    city: "Louisiana",
    location: "New Orleans",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Sale",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Eco Villa in Northfield",
    category: "single family",
    price: 3600,
    city: "Minnesota",
    location: "Northfield",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Rent",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Eco Villa in Saint Cloud",
    category: "duplex",
    price: 6800,
    city: "Minnesota",
    location: "Saint Cloud",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Sale",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Green Villa in Jersey City",
    category: "villa",
    price: 8100,
    city: "New Jersey",
    location: "Jersey City",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Rent",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Amazing Home in Atlantic City",
    category: "appartment",
    price: 4500,
    city: "New Jersey",
    location: "Atlantic City",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Sale",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Beautiful House in Ellensburg",
    category: "house",
    price: 7900,
    city: "Washington",
    location: "Ellensburg",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Rent",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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
    name: "Green Home in Olympia",
    category: "land",
    price: 6300,
    city: "Washington",
    location: "Olympia",
    address: "Belmont Gardens",
    type: "Single house",
    status: "Sale",
    date: "September 26,2023",
    floor: 10,
    space: 759.9,
    room: "Double",
    bedRoom: 3,
    feature: "Duplex",
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
        value:"500 ft2"
      },
      {
        id:3,
        label:"Property Lot Size",
        value:"1,000 ft2"
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