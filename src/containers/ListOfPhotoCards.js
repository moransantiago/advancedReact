import { withPhotos } from '../hoc/withPhotos'// <--High order component(hoc)

import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
