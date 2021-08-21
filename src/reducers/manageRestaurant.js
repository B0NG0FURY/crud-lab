import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            let restaurant = {
                text: action.text,
                id: cuid()
            }
            return {...state, restaurants: state.restaurants.concat(restaurant)}
        
        case "DELETE_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            }
        case "ADD_REVIEW":
            const review = {
                text: action.review.text,
                id: cuid(),
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: state.reviews.concat(review)}

        case "DELETE_REVIEW":
                return {
                    ...state,
                    reviews: state.reviews.filter(review => review.id !== action.id)
                }

        default:
            return state;
    }
}
