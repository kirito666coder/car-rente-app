
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

export const createBooking = async (formData: any) => {
  const mutationQuery = gql`
    mutation MyMutation(
      $userName: String!,
      $location: String!,
      $pickUpDate: DateTime!,
      $pickOffDate: DateTime!,
      $contactNumber: String!,
      $carId: ID!
    ) {
      createBooking(
        data: {
          userName: $userName,
          location: $location,
          pickUpDate: $pickUpDate,
          pickOffDate: $pickOffDate,
          contactNumber: $contactNumber,
          carId: { connect: { id: $carId } }
        }
      ) {
        id
      }
    }
  `;

  // Convert Date objects to ISO strings if needed
  const variables = {
    userName: formData.userName || 'anya',  // fallback to 'anya' if missing
    location: formData.location,
    pickUpDate: new Date(formData.PickUpDate).toISOString(),
    pickOffDate: new Date(formData.PickOffDate).toISOString(),
    contactNumber: formData.ContactNumber,
    carId: formData.carId,
  };

  const result = await request(
    'https://ap-south-1.cdn.hygraph.com/content/cmb3wzu3g015v07wd2vuxhjh5/master',
    mutationQuery,
    variables
  );

  return result;
};