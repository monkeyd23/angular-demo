import {OpaqueToken} from '@angular/core'

export const lookupListToken = new OpaqueToken('lookupListsToken');

export const lookupLists = {
  mediums: ['Movies', 'Series'],
  categories: ['Biography', 'Action', 'Classic','Science', 'Drama', 'Thriller', 'Fiction', 'Comedy', 'Horror']
}
