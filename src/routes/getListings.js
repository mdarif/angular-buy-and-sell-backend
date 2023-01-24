import Boom from '@hapi/boom';
import { fakeListings } from './fake-data';

export const getListingRoute = {
  method: 'GET',
  path: '/api/listings/{id}',
  handler: (req, h) => {
    const { id } = req.params;
    const listing = fakeListings.find((listing) => listing.id === id);
    if (!listing)
      throw Boom.notFound(`Listing does not exist with the id ${id}`);
    return listing;
  },
};
