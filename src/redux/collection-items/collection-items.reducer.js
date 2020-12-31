const INITIAL_STATE=
{
   collectionItemsData: {
    'sofas': {
          id: 1,
          title: 'Sofas',
          routeName: 'Sofas',
          items: [
            {
              id: 1,
              name: 'Chester L-Shape',
              imageUrl: "../images/sofas/chesterLShape.jpg",
              price: 1500
            },
            {
              id: 2,
              name: 'Coloured L-Shape',
              imageUrl: "../images/sofas/colouredLShape.jpg",
              price: 1400
            },
            {
              id: 3,
              name: 'Black&White L-Shape',
              imageUrl: "../images/sofas/blackAndWhiteLShape.jpg",
              price: 1600
            },
            {
              id: 4,
              name: 'Cream L-Shape',
              imageUrl: "../images/sofas/creamLShape.jpg",
              price: 1000
            },
            {
              id: 5,
              name: 'Golden L-Shape',
              imageUrl: "../images/sofas/goldenLShape.jpg",
              price: 18
            },
            {
              id: 6,
              name: 'Toffee Style',
              imageUrl: "../images/sofas/toffee.jpg",
              price: 18
            },
            {
              id: 7,
              name: 'Boat Style',
              imageUrl: "../images/sofas/boat.jpg",
              price: 14
            },
            {
              id: 8,
              name: 'Chester',
              imageUrl: "../images/sofas/chester.jpg",
              price: 16
            }
          ]
        },
       'dinning-tables': {
          id: 2,
          title: 'Dinning Tables',
          routeName: 'dinning-tables',
          items: [
            {
              id: 9,
              name: 'Classic',
              imageUrl: "../images/dinningTables/classic.jpg",
              price: 500
            },
            {
              id: 10,
              name: 'Marble',
              imageUrl: "../images/dinningTables/marble.jpg",
              price: 700
            },
            {
              id: 11,
              name: 'Modern',
              imageUrl: "../images/dinningTables/modern.jpg",
              price: 1000
            },
            {
              id: 12,
              name: 'Royal Gold',
              imageUrl: "../images/dinningTables/royalGold.jpg",
              price: 1100
            },
            {
              id: 13,
              name: 'Classic Brown',
              imageUrl: "../images/dinningTables/classicBrown.jpg",
              price: 500
            },
            {
              id: 14,
              name: 'Avantika',
              imageUrl: "../images/dinningTables/avantika.jpg",
              price: 750
            },
            {
              id: 15,
              name: 'Classic Leather',
              imageUrl: "../images/dinningTables/classicLeather.jpg",
              price: 1500
            },
            {
              id: 16,
              name: 'Modern Circle',
              imageUrl: "../images/dinningTables/modernCircle.jpg",
              price: 200
            }
          ]
        },
       'office-furniture': {
          id: 3,
          title: 'Office Furniture',
          routeName: 'office-furniture',
          items: [
            {
              id: 17,
              name: 'Home Office Kit',
              imageUrl: "../images/officeFurniture/homeOfficeKit.jpg",
              price: 1250
            },
            {
              id: 18,
              name: 'PolyNylon Chair',
              imageUrl: "../images/officeFurniture/polyNylonChair.jpg",
              price: 185
            },
            {
              id: 19,
              name: 'L-Shape Counter',
              imageUrl: "../images/officeFurniture/lShapeCounter.jpg",
              price: 500
            },
            {
              id: 20,
              name: 'L-Shape Desk',
              imageUrl: "../images/officeFurniture/lShapeDesk.jpg",
              price: 700
            },
            {
              id: 21,
              name: 'Cabin Desk',
              imageUrl: "../images/officeFurniture/cabinDesk.jpg",
              price: 185
            }
          ]
        },
        'home-decor':{
          id: 4,
          title: 'Home Decor',
          routeName: 'home-decor',
          items: [
            {
              id: 22,
              name: 'Black Table Lamp',
              imageUrl: "../images/homeDecor/blackTableLamp.jpg",
              price: 25
            },
            {
              id: 23,
              name: 'Copper Curtains',
              imageUrl: "../images/homeDecor/copperCurtains.jpg",
              price: 20
            },
            {
              id: 24,
              name: 'Modern Chandelier',
              imageUrl: "../images/homeDecor/modernChandelier.jpg",
              price: 80
            },
            {
              id: 25,
              name: 'Designer Paintings',
              imageUrl: "../images/homeDecor/designerPaintings.jpg",
              price: 50
            },
            {
              id: 26,
              name: 'Home-Shaped Mini Shelves',
              imageUrl: "../images/homeDecor/homeShapedMiniShelves.jpg",
              price: 45
            },
            {
              id: 27,
              name: 'White Comforter Set',
              imageUrl: "../images/homeDecor/whiteComforterSet.jpg",
              price: 150
            }
          ]
        },
        'beds':{
          id: 5,
          title: 'Beds',
          routeName: 'beds',
          items: [
            {
              id: 28,
              name: 'Classic Grey',
              imageUrl: "../images/beds/classicGrey.jpg",
              price: 525
            },
            {
              id: 29,
              name: 'Brown Bunk Bed',
              imageUrl: "../images/beds/brownBunkBed.png",
              price: 200
            },
            {
              id: 30,
              name: 'King Avtar',
              imageUrl: "../images/beds/kingAvtar.jpg",
              price: 700
            },
            {
              id: 31,
              name: 'Queen Style',
              imageUrl: "../images/beds/queenStyle.jpg",
              price: 1025
            },
            {
              id: 32,
              name: 'Royal Quilt',
              imageUrl: "../images/beds/royalQuilt.jpg",
              price: 1425
            },
            {
              id: 33,
              name: 'Wooden Compact',
              imageUrl: "../images/beds/woodenCompact.jpg",
              price: 150
            }
          ]
        }
      }
 }


const collectionItemsReducer = (state=INITIAL_STATE,action)=>{
    switch(action){
        default:
            return state;
    }
} 

export default collectionItemsReducer;
