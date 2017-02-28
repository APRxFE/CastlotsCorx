import * as Rx from 'rxjs'
import { Injectable } from '@angular/core'

import { FireCorx } from '../FireCorx'

@Injectable()
export class CastlotsCorx {

	isAuth: boolean = this.fireCorx.isAuth

	constructor(
		public fireCorx: FireCorx
	) {

	}

}