
import { gql, request } from 'graphql-request'

export async function getCarsList() {
  const query = gql`
  query MyQuery {
  carLists {
    carAvg
    carBrand
    carType
    createdAt
    id
    seat
    updatedAt
    price
    name
    image {
      url
    }
  }
}`

  const result = await request('https://ap-south-1.cdn.hygraph.com/content/cmb3wzu3g015v07wd2vuxhjh5/master', query)

  return result
}


export const getStorLOcation = async () => {
  const query = gql`
  query MyQuery {
  storesLocations {
    address
  }
}
  `

  const result = await request(`https://ap-south-1.cdn.hygraph.com/content/cmb3wzu3g015v07wd2vuxhjh5/master`, query)

  return result
}


export const createBooking = async () => {
  const mutationQuerry = gql`
 mutation MyMutation {
  createBooking(
    data: {userName: "",
     location: "",
      pickUpDate: "",
       pickOffDate: "",
        contactNumber: "",
         carId: {
         connect:
          {id: ""}
          }}
  ) {
    id
  }
}
  `
}