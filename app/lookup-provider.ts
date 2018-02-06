import {OpaqueToken} from '@angular/core'

export const lookupListToken = new OpaqueToken('lookupListsToken');

export const lookupLists = {
  mediums: ['Movies', 'Series'],
  categories: ['Science', 'Drama', 'Fiction', 'Comedy']
}
