import request from "graphql-request"

export default async function getCarsList() {
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
  }
}`

const result = await request('https://ap-south-1.cdn.hygraph.com/content/cmb3wzu3g015v07wd2vuxhjh5/master',query)

return result
}