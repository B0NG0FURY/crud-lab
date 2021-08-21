import cuid from 'cuid';

export default function manageReview(state = [], action) {
    switch(action.type) {
        case "ADD_REVIEW":
            const review = {
                text: action.review,
                id: cuid(),
                restaurantId: action.restaurantId
            }
            return state.concat(review)

        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.id)

        default:
            return state
    }
}